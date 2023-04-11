/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CodeBlock } from '@/components/codeBlock';
import { fontSizes, pallette, Text } from '@/shared/texts';
import { ConsoleContainer, ConsoleLayout, Content } from '.';
import { AppHead } from '@/components/head';
import Header from '@/components/header';
import { SideMenu } from '@/components/sideMenu';
import { Notifications } from '../trial';
// import useIsMobile from '../../components/shared/hooks/isMobileHook';

export const Code = ({
  lang = 'bash',
  style = {},
  code,
  hideLanguages = false,
  onCopyClicked = () => {},
}: any) => {
  const handleCopyClicked = () => {
    navigator.clipboard.writeText(code[language]);
    onCopyClicked();
  };
  const [language, setLangue] = useState('bash');
  return (
    <>
      <BoxContainer style={style}>
        <CodeHeader>
          <CodeHeaderSpan
            onClick={() => setLangue('bash')}
            active={language === 'bash'}
          >
            Bash
          </CodeHeaderSpan>
          <CodeHeaderSpan
            onClick={() => setLangue('java')}
            active={language === 'java'}
          >
            Java
          </CodeHeaderSpan>
          <CodeHeaderSpan
            onClick={() => setLangue('node')}
            active={language === 'node'}
          >
            Node
          </CodeHeaderSpan>
          <CodeHeaderSpan
            onClick={() => setLangue('go')}
            active={language === 'go'}
          >
            Go
          </CodeHeaderSpan>
        </CodeHeader>

        <CodeBlock
          //   style={{ width: `${isMobile ? '75vw' : '100%'}` }}
          code={code[language]}
          type={language}
          onCopy={handleCopyClicked}
          //   language={language === 'node' ? 'javascript' : language}
          //   theme={'nord'}
          //   displayLang={language}
          //   showLineNumbers={false}
          //   wrapLines={true}
        />
      </BoxContainer>
    </>
  );
};

const DocPage = () => {
  const isMobile = false;
  const [lang, setLang] = useState('Bash');
  const [copyAlert, setCopyAlert] = useState(false);

  const contentSize = fontSizes.xlarge;
  const contentPaddings = {
    padding: `0px 12px`,
    lineHeight: `42px`,
  };

  useEffect(() => {
    if (copyAlert) {
      setTimeout(() => {
        setCopyAlert(false);
      }, 3000);
    }
  });

  return (
    <ConsoleContainer>
      <AppHead />
      <Header background={'#141a1f'} />
      <ConsoleLayout>
        <SideMenu />
        <Content>
          <ApiWrapper>
            <div>
              <Text
                style={contentPaddings}
                size={fontSizes.subTitle}
                color={pallette.white}
              >
                Fivicon documentation
              </Text>
            </div>
            <Text
              style={contentPaddings}
              size={fontSizes.large}
              color={pallette.white}
            >
              Getting started
            </Text>
            <Text
              style={contentPaddings}
              size={fontSizes.large}
              color={pallette.lightWhite}
            >
              Welcome to Fivicon api!
            </Text>
            <Text
              style={contentPaddings}
              size={contentSize}
              color={pallette.lightWhite}
            >
              Before we begin exploring the logos of the World Wide Web, it's
              important to understand how this API works.
            </Text>
            <Text></Text>
            <Text
              style={contentPaddings}
              size={fontSizes.xlarge}
              color={pallette.white}
            >
              Find my API key
            </Text>
            <Text
              style={contentPaddings}
              size={contentSize}
              color={pallette.lightWhite}
            >
              To obtain your API key, please navigate to the API page and follow
              the instructions provided.
              {/* <a
            style={{ color: '#7e7eff' }}
            href={'/console/api'}
            target="_blank"
            rel="noreferrer"
          >
            API page
          </a>{' '} */}
            </Text>
            <Text
              style={contentPaddings}
              size={contentSize}
              color={pallette.lightWhite}
            >
              Your API key will be a UUIDv4 format, which will look something
              like this:
            </Text>
            <Code
              onCopyClicked={() => {
                setCopyAlert(true);
              }}
              lang={'bash'}
              isMobile={isMobile}
              language={lang === 'node' ? 'javascript' : lang}
              code={{
                bash: 'a0fc7dad-637a-4d75-aba7-249a7d115bc8',
                go: 'a0fc7dad-637a-4d75-aba7-249a7d115bc8',
                node: 'a0fc7dad-637a-4d75-aba7-249a7d115bc8',
                java: 'a0fc7dad-637a-4d75-aba7-249a7d115bc8',
              }}
              displayLang={'bash'}
            />
            <Text></Text>
            <Text
              style={contentPaddings}
              size={contentSize}
              color={pallette.lightWhite}
            >
              Please ensure that you copy your API key accurately as it will be
              required for authentication purposes when making requests to the
              API.
            </Text>
            <Text></Text>
            <Text
              style={contentPaddings}
              size={fontSizes.xlarge}
              color={pallette.white}
            >
              Usage
            </Text>
            <Text
              style={contentPaddings}
              size={contentSize}
              color={pallette.lightWhite}
            >
              Great! Now that you have your API key, you can start making
              requests to the Fivicon server to retrieve the latest company
              logos.
            </Text>
            <Text
              style={contentPaddings}
              size={contentSize}
              color={pallette.lightWhite}
            >
              If you haven't already tried our online demo, you can access it on
              the{' '}
              {/* <a
            style={{ color: '#7e7eff' }}
            href={'/trial'}
            target="_blank"
            rel="noreferrer"
          > */}
              Fivicon trial page
              {/* </a> */}.
            </Text>
            <Text
              style={contentPaddings}
              size={contentSize}
              color={pallette.lightWhite}
            >
              This will give you a feel for how the API works and what kind of
              data you can expect to receive in response to your requests. Once
              you're comfortable with the demo, you can begin integrating the
              API into your own application or website.
            </Text>
            <Text></Text>
            <Code
              onCopyClicked={() => {
                setCopyAlert(true);
              }}
              lang={lang}
              language={lang === 'node' ? 'javascript' : lang}
              isMobile={isMobile}
              displayLang={'java'}
              code={{
                bash: `curl GET https://api.fivicon.com/node/api/logo?name=COMPANY_DOMAIN -H 'fivi-api-key: YOUR_API_KEY'`,
                go: `
package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    apiKey := "YOUR_API_KEY"
    url := "https://api.fivicon.com/node/api/logo?name=COMPANY_DOMAIN"

    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("fivi-api-key", apiKey)

    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()

    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,
                java: `import java.net.HttpURLConnection;
                   import java.net.URL;
                   import java.io.BufferedReader;
                   import java.io.InputStreamReader;
                   
                   public class Main {
                     public static void main(String[] args) throws Exception {
                       String apiKey = "YOUR_API_KEY";
                       String url = "https://api.fivicon.com/node/api/logo?name=COMPANY_DOMAIN";
                   
                       URL obj = new URL(url);
                       HttpURLConnection con = (HttpURLConnection) obj.openConnection();
                   
                       con.setRequestMethod("GET");
                       con.setRequestProperty("fivi-api-key", apiKey);
                   
                       BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
                       String inputLine;
                       StringBuffer response = new StringBuffer();
                   
                       while ((inputLine = in.readLine()) != null) {
                         response.append(inputLine);
                       }
                   
                       in.close();
                   
                       System.out.println(response.toString());
                     }
                   }
                   `,
                node: `const fetch = require('node-fetch');

                   const apiKey = 'YOUR_API_KEY';
                   const url = 'https://api.fivicon.com/node/api/logo?name=COMPANY_DOMAIN';
                   
                   fetch(url, {
                     method: 'GET',
                     headers: {
                       'fivi-api-key': apiKey
                     }
                   })
                     .then(res => res.text())
                     .then(body => console.log(body))
                     .catch(err => console.log('Error:', err.message));
                   `,
              }}
            />
            <Text></Text>
            <Text
              style={contentPaddings}
              size={contentSize}
              color={pallette.lightWhite}
            >
              The output structure of the API call will depend on the specific
              endpoint being used and the parameters passed in the request.
              However, in general, the response from the Fivicon API will be in
              JSON format and may include the following fields:
            </Text>
            <Text></Text>
            <Code
              onCopyClicked={() => {
                setCopyAlert(true);
              }}
              lang={lang}
              language={lang === 'node' ? 'javascript' : lang}
              isMobile={isMobile}
              displayLang={'bash'}
              code={{
                node: `{
    "domain": "tesla.com",
    "url": "THE URL FOR THE COMPANY LOGO",
    "timestamp": 1679095203528,
    "_v": 1,
    "width": 152,
    "height": 152,
    "hUnits": "px",
    "wUnits": "px",
    "dimensions": "152x152",
    "type": "png",
    "date": 1679095203553
}`,
                bash: `{
    "domain": "tesla.com",
    "url": "THE URL FOR THE COMPANY LOGO",
    "timestamp": 1679095203528,
    "_v": 1,
    "width": 152,
    "height": 152,
    "hUnits": "px",
    "wUnits": "px",
    "dimensions": "152x152",
    "type": "png",
    "date": 1679095203553
}`,
                java: `{
    "domain": "tesla.com",
    "url": "THE URL FOR THE COMPANY LOGO",
    "timestamp": 1679095203528,
    "_v": 1,
    "width": 152,
    "height": 152,
    "hUnits": "px",
    "wUnits": "px",
    "dimensions": "152x152",
    "type": "png",
    "date": 1679095203553
}`,
                go: `{
    "domain": "tesla.com",
    "url": "THE URL FOR THE COMPANY LOGO",
    "timestamp": 1679095203528,
    "_v": 1,
    "width": 152,
    "height": 152,
    "hUnits": "px",
    "wUnits": "px",
    "dimensions": "152x152",
    "type": "png",
    "date": 1679095203553
}`,
              }}
            />
            <Text
              style={{ ...contentPaddings }}
              size={contentSize}
              color={pallette.lightWhite}
            >
              The exact fields returned may vary depending on the endpoint being
              used, but the response will generally be structured as a JSON
              object containing one or more of these fields.
            </Text>
            <Text></Text>
            <Text
              style={contentPaddings}
              size={fontSizes.xlarge}
              color={pallette.white}
            >
              List company Logo types available
            </Text>
            <Text
              style={{ ...contentPaddings }}
              size={contentSize}
              color={pallette.lightWhite}
            >
              Before querying the Fivicon API for a specific logo, it may be
              helpful to browse the company logo catalog to see what logos are
              available and what types and resolutions are supported. The
              catalog may include information such as:
              <ul>
                <li>Company name</li>
                <li>Logo type (e.g. standard, mobile, social media, etc.)</li>
                <li>Supported file formats (e.g. PNG, ICO, SVG)</li>
                <li>Supported resolutions (e.g. 16x16, 32x32, 64x64, etc.)</li>
              </ul>
              You can retrieve the company logo catalog by making a GET request
              to a hypothetical catalog endpoint, like this:
            </Text>
            {/* <Text style={contentPaddings} size={contentSize} color={pallette.lightWhite}>You can get the catalog by the following request</Text> */}
            <Text></Text>
            <Code
              onCopyClicked={() => {
                setCopyAlert(true);
              }}
              language={lang === 'node' ? 'javascript' : lang}
              lang={lang}
              isMobile={isMobile}
              code={{
                bash: `curl GET 'https://api.fivicon.com/node/api/logo/list/?name=COMPANY_DOMAIN' -H 'fivi-api-key: YOUR_API_KEY'`,
                go: `
package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    apiKey := "YOUR_API_KEY"
    url := "https://api.fivicon.com/node/api/logo/list/?name=COMPANY_DOMAIN"

    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("fivi-api-key", apiKey)

    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()

    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}
            `,
                java: `
import java.net.URL;
import java.net.HttpURLConnection;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
    String apiKey = "YOUR_API_KEY";
    String url = "https://api.fivicon.com/node/api/logo/list/?name=COMPANY_DOMAIN";

    HttpURLConnection con = (HttpURLConnection) new URL(url).openConnection();

    con.setRequestMethod("GET");
    con.setRequestProperty("fivi-api-key", apiKey);

    BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));

    String inputLine;
    while ((inputLine = in.readLine()) != null) {
        System.out.println(inputLine);
    }

    in.close();
    }
}
            `,
                node: `const fetch = require('node-fetch');

            const apiKey = 'YOUR_API_KEY';
            const url = 'https://api.fivicon.com/node/api/logo/list/?name=COMPANY_DOMAIN';
            
            fetch(url, {
              method: 'GET',
              headers: {
                'fivi-api-key': apiKey
              }
            })
              .then(res => res.text())
              .then(body => console.log(body))
              .catch(err => console.log('Error:', err.message));
            `,
              }}
              displayLang={'java'}
            />
            <Text></Text>
            <Text
              style={contentPaddings}
              size={contentSize}
              color={pallette.lightWhite}
            >
              The catalog response, will contain a list of types, each type will
              have array of logo dimensions
            </Text>
            <Text
              style={contentPaddings}
              size={contentSize}
              color={pallette.lightWhite}
            >
              Example for the <code>logo/list</code> response
            </Text>
            <Text></Text>
            <Text></Text>
            <Code
              onCopyClicked={() => {
                setCopyAlert(true);
              }}
              language={lang === 'node' ? 'javascript' : lang}
              lang={lang}
              isMobile={isMobile}
              code={{
                bash: `{
    png: ['16x16','32x32','64x64'],
    svg: ['16x16','32x32','64x64'],
    ico: ['16x16','32x32','64x64'],
}`,
                go: `{
    png: ['16x16','32x32','64x64'],
    svg: ['16x16','32x32','64x64'],
    ico: ['16x16','32x32','64x64'],
}`,
                java: `{
    png: ['16x16','32x32','64x64'],
    svg: ['16x16','32x32','64x64'],
    ico: ['16x16','32x32','64x64'],
}`,
                node: `{
    png: ['16x16','32x32','64x64'],
    svg: ['16x16','32x32','64x64'],
    ico: ['16x16','32x32','64x64'],
}`,
              }}
              displayLang={'bash'}
            />
            <Text></Text>
            <Text
              style={{ ...contentPaddings }}
              size={contentSize}
              color={pallette.lightWhite}
            >
              This request would return a JSON object containing a list of
              available company logos and associated information. You can use
              this information to identify the specific logo you need and ensure
              that it's available in the file format and resolution that you
              require. Once you have identified the logo you need, you can make
              a subsequent request to the API to retrieve it in the desired
              format and resolution. When making a request to the Fivicon API,
              you can specify the desired file format using the appropriate file
              extension in the request URL. For example, to retrieve a logo in
              PNG format, you can use a URL like this:
            </Text>
            <Text></Text>
            <Code
              onCopyClicked={() => {
                setCopyAlert(true);
              }}
              language={lang === 'node' ? 'javascript' : lang}
              isMobile={isMobile}
              code={{
                bash: `curl GET https://api.fivicon.com/node/apilogo?url=example.com&format=png -H 'fivi-api-key: YOUR_API_KEY'`,
                go: `
          package main

          import (
              "fmt"
              "io/ioutil"
              "net/http"
          )
          
          func main() {
              apiKey := "YOUR_API_KEY"
              url := "https://api.fivicon.com/node/apilogo?url=example.com&format=png"
          
              req, _ := http.NewRequest("GET", url, nil)
              req.Header.Set("fivi-api-key", apiKey)
          
              resp, _ := http.DefaultClient.Do(req)
              defer resp.Body.Close()
          
              body, _ := ioutil.ReadAll(resp.Body)
              fmt.Println(string(body))
          }
          `,
                java: `import java.net.URL;
          import java.net.HttpURLConnection;
          import java.io.BufferedReader;
          import java.io.InputStreamReader;
          
          public class Main {
            public static void main(String[] args) throws Exception {
              String apiKey = "YOUR_API_KEY";
              String url = "https://api.fivicon.com/node/apilogo?url=example.com&format=png";
          
              HttpURLConnection con = (HttpURLConnection) new URL(url).openConnection();
          
              con.setRequestMethod("GET");
              con.setRequestProperty("fivi-api-key", apiKey);
          
              BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
          
              String inputLine;
              while ((inputLine = in.readLine()) != null) {
                System.out.println(inputLine);
              }
          
              in.close();
            }
          }
          `,
                node: `
const fetch = require('node-fetch');

const apiKey = 'YOUR_API_KEY';
const url = 'https://api.fivicon.com/node/apilogo?url=example.com&format=png';

fetch(url, {
    method: 'GET',
    headers: { 'fivi-api-key': apiKey }
})
.then(res => res.text())
.then(body => console.log(body))
.catch(err => console.log('Error:', err.message));
    `,
              }}
              lang={lang}
              displayLang={'java'}
            />
            <Text
              style={{ ...contentPaddings }}
              size={contentSize}
              color={pallette.lightWhite}
            >
              Similarly, to retrieve a logo in ICO or SVG format, you would use
              a URL with the appropriate file extension:
            </Text>
            <Text></Text>
            <Code
              onCopyClicked={() => {
                setCopyAlert(true);
              }}
              code={{
                bash: `
curl GET https://api.fivicon.com/node/apilogo?url=example.com&format=ico -H 'fivi-api-key: YOUR_API_KEY'

curl GET https://api.fivicon.com/node/apilogo?url=example.com&format=svg -H 'fivi-api-key: YOUR_API_KEY'
                        `,
                go: `package main

                    import (
                        "fmt"
                        "io/ioutil"
                        "net/http"
                    )
                    
                    func main() {
                        apiKey := "YOUR_API_KEY"
                        url := "https://api.fivicon.com/node/apilogo?url=example.com&format=ico"
                        // SVG
                        url := "https://api.fivicon.com/node/apilogo?url=example.com&format=svg"

                        req, _ := http.NewRequest("GET", url, nil)
                        req.Header.Set("fivi-api-key", apiKey)
                    
                        resp, _ := http.DefaultClient.Do(req)
                        defer resp.Body.Close()
                    
                        body, _ := ioutil.ReadAll(resp.Body)
                        fmt.Println(string(body))
                    }
                    `,
                java: `import java.net.URL;
                    import java.net.HttpURLConnection;
                    import java.io.BufferedReader;
                    import java.io.InputStreamReader;
                    
                    public class Main {
                      public static void main(String[] args) throws Exception {
                        String apiKey = "YOUR_API_KEY";
                        String url = "https://api.fivicon.com/node/apilogo?url=example.com&format=ico";
                        //     String url = "https://api.fivicon.com/node/apilogo?url=example.com&format=svg";

                        HttpURLConnection con = (HttpURLConnection) new URL(url).openConnection();
                    
                        con.setRequestMethod("GET");
                        con.setRequestProperty("fivi-api-key", apiKey);
                    
                        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
                    
                        String inputLine;
                        while ((inputLine = in.readLine()) != null) {
                          System.out.println(inputLine);
                        }
                    
                        in.close();
                      }
                    }
                    `,
                node: `
const fetch = require('node-fetch');

const apiKey = 'YOUR_API_KEY';
const url = 'https://api.fivicon.com/node/apilogo?url=example.com&format=ico';
// SVG
const url = 'https://api.fivicon.com/node/apilogo?url=example.com&format=svg';

fetch(url, {
  method: 'GET',
  headers: {
    'fivi-api-key': apiKey
  }
})
  .then(res => res.text())
  .then(body => console.log(body))
  .catch(err => console.log('Error:', err.message));
                    `,
              }}
              lang={lang}
              displayLang={'java'}
              isMobile={isMobile}
            />
            <Text
              style={{ ...contentPaddings }}
              size={contentSize}
              color={pallette.lightWhite}
            >
              Note that not all logos may be available in all file formats or
              resolutions, so it's important to check the catalog or experiment
              with different formats to see what's available. If you need
              further assistance or information, consult the API documentation
              or contact the Fivicon team for support.
            </Text>
          </ApiWrapper>
        </Content>
      </ConsoleLayout>
      <Notifications isVisible={copyAlert} notifications={'Copied!'} />
    </ConsoleContainer>
  );
};

const CodeHeader = styled.div`
  height: 20px;
  background: Red;
  position: absolute;
  width: 100%;
  height: 34px;
  background-color: #202934 !important;
  position: absolute;
  top: -34px;
  left: 0;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;

  span {
  }
`;

const CodeHeaderSpan = styled.span<any>`
  margin: 0px 12px;

  border-bottom: 3px solid
    ${({ active }) => (active ? '#00BCD4' : 'transparent')};
  line-height: 35px;
`;

const ApiWrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100vh;

  @media only screen and (max-width: 767px) {
    overflow-x: hidden;
    width: 90%;

    p {
      font-size: ${fontSizes.medium};
    }
  }
`;

const BoxContainer = styled.div<any>`
  position: relative;
  background-color: #202934;
  width: 80vw;
  display: flex;
  border-radius: 20px;
  border-radius: 20px;
  // align-self: center;
  margin: 42px 0px;
  margin-left: '12px';
  display: flex;
  flex-direction: column;
  /* padding: 22px 12px; */
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  button {
    background: transparent;
    border: none;

    svg {
      fill: white;
    }
  }
  div {
    /* width: 100%; */
    background-color: transparent;

    span {
      background-color: transparent !important;
      color: white;
    }

    code {
      background-color: transparent;
      color: white;
    }
  }
`;

export default DocPage;
