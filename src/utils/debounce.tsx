type DebounceFn<T extends (...args: any[]) => any> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T> | undefined;

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): DebounceFn<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): any {
    const context = this;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn.apply(context, args);
      timeoutId = undefined;
    }, delay);
  };
}
