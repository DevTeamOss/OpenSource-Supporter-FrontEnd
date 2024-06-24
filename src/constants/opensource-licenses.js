export const OPENSOURCE_LICENSES = `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
    />
    <style>
      .legalNotice {
        margin: 0;
        color: #888;
        font: 13px/1.25 sans-serif;
        -webkit-text-size-adjust: 100%;
      }

      .title {
        font-size: 1.25em;
        padding: 1.25em 1em 1em;
        margin: 0;
        background: #000;
        color: #fff;
        position: relative;
      }

      .notice,
      .oss,
      .compliance,
      .licenses div {
        padding: 10px;
      }

      .oss dl dt {
        font-size: 14px;
        font-weight: bold;
        color: #000;
        margin-top: 1em;
      }

      .oss dl dd {
        margin-left: 20px;
        word-break: break-all;
      }

      .oss a,
      .compliance a {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: underline;
      }

      .oss i {
        color: #333;
      }

      .oss,
      .compliance,
      .licenses div {
        border-top: 1px solid #ccc;
        padding-top: 1em;
      }

      .compliance h3,
      .licenses h1,
      h3 {
        color: #000;
      }

      .licenses div {
        display: block;
        word-wrap: break-word;
      }

      .licenses pre {
        display: block;
        word-wrap: break-word;
        font-family: monospace;
        margin: 1em 0px;
      }

      .license pre {
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        max-height: 200px;
        border: 1px solid #ccc;
      }

      .license {
        color: black;
      }

      .license a {
        text-decoration: none;
      }

      details > summary::-webkit-details-marker {
        display: none;
      }

      .noti_kakao {
        border: #fae000 solid 2px;
        background: #fffded;
        border-radius: 4px;
        padding: 24px;
        line-height: 20px;
        font-size: 12px;
        margin: 12px 0;
        color: #222;
      }
    </style>
    <script>
      function selectLicense(detailElement, licenseId) {
        if (detailElement.open && detailElement.children.length === 1) {
          let pre = document.createElement("pre");
          pre.innerHTML = document.getElementById(licenseId).textContent;
          detailElement.appendChild(pre);
        }
      }
    </script>
  </head>
  <body revisionId="1sLlVBU04x">
    <div class="legalNotice">
      <h1 class="title">OSS Notice | OpenSource-Supporter</h1>
      <div class="notice">
        <p>This application is Copyright © DevTeamOss. All rights reserved.</p>
        <p>
          The following sets forth attribution notices for third party software
          that may be contained in this application.
        </p>
      </div>
      <div class="oss">
        <dl>
          <dt><strong> axios</strong></dt>
          <dd>
            <a
              href="https://github.com/axios/axios"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/axios/axios</a
            >
          </dd>
          <dd>Copyright 2014-present Matt Zabriskie</dd>
          <dd class="license">
            <details id="axios" ontoggle="selectLicense(this, 'MIT-License')">
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> dotenv</strong></dt>
          <dd>
            <a
              href="https://github.com/motdotla/dotenv"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/motdotla/dotenv</a
            >
          </dd>
          <dd>Copyright 2015 Scott Motte</dd>
          <dd class="license">
            <details
              id="dotenv"
              ontoggle="selectLicense(this, 'BSD-2-Clause-License')"
            >
              <summary>BSD 2-Clause &quot;Simplified&quot; License</summary>
            </details>
          </dd>
          <dt><strong> Facebook React</strong></dt>
          <dd>
            <a
              href="https://github.com/facebook/react"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/facebook/react</a
            >
          </dd>
          <dd>Copyright 2013-present, Facebook, Inc.</dd>
          <dd class="license">
            <details
              id="Facebook React"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> Font-Awesome</strong></dt>
          <dd>
            <a
              href="https://github.com/fortawesome/font-awesome"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/fortawesome/font-awesome</a
            >
          </dd>
          <dd>Copyright 2023 Fonticons, Inc</dd>
          <dd>Copyright 2023 Fonticons, Inc</dd>
          <dd>Copyright 2023 Fonticons, Inc. (https://fontawesome.com)</dd>
          <dd>
            Copyright with Reserved Font Name: &amp;quot;Font Awesome&amp;quot;.
          </dd>
          <dd class="license">
            <details
              id="Font-Awesome"
              ontoggle="selectLicense(this, 'CC-BY-4.0-License')"
            >
              <summary>Creative Commons Attribution 4.0 International</summary>
            </details>
            <details
              id="Font-Awesome"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
            <details
              id="Font-Awesome"
              ontoggle="selectLicense(this, 'OFL-1.1-License')"
            >
              <summary>SIL Open Font License 1.1</summary>
            </details>
          </dd>
          <dt><strong> moment</strong></dt>
          <dd>
            <a
              href="https://github.com/moment/moment"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/moment/moment</a
            >
          </dd>
          <dd>Copyright JS Foundation and other contributors</dd>
          <dd class="license">
            <details id="moment" ontoggle="selectLicense(this, 'MIT-License')">
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> React Circular Progressbar</strong></dt>
          <dd>
            <a
              href="https://github.com/kevinsqi/react-circular-progressbar"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/kevinsqi/react-circular-progressbar</a
            >
          </dd>
          <dd>Copyright 2017 Kevin Qi</dd>
          <dd class="license">
            <details
              id="React Circular Progressbar"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> React Redux</strong></dt>
          <dd>
            <a
              href="https://github.com/reduxjs/react-redux"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/reduxjs/react-redux</a
            >
          </dd>
          <dd>Copyright 2015-present Dan Abramov</dd>
          <dd class="license">
            <details
              id="React Redux"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> React Router</strong></dt>
          <dd>
            <a
              href="https://github.com/reacttraining/react-router"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/reacttraining/react-router</a
            >
          </dd>
          <dd>Copyright React Training 2016-2018</dd>
          <dd class="license">
            <details
              id="React Router"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> React Syntax Highlighter</strong></dt>
          <dd>
            <a
              href="https://github.com/react-syntax-highlighter/react-syntax-highlighter"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/react-syntax-highlighter/react-syntax-highlighter</a
            >
          </dd>
          <dd>Copyright 2019 Conor Hastings</dd>
          <dd class="license">
            <details
              id="React Syntax Highlighter"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> React-ApexCharts</strong></dt>
          <dd>
            <a
              href="https://github.com/apexcharts/react-apexcharts"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/apexcharts/react-apexcharts</a
            >
          </dd>
          <dd>Copyright 2018 ApexCharts</dd>
          <dd class="license">
            <details
              id="React-ApexCharts"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> react-fontawesome</strong></dt>
          <dd>
            <a
              href="https://github.com/fortawesome/react-fontawesome"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/fortawesome/react-fontawesome</a
            >
          </dd>
          <dd>Copyright 2018 Fonticons, Inc.</dd>
          <dd class="license">
            <details
              id="react-fontawesome"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> react-github-calendar</strong></dt>
          <dd>
            <a
              href="https://github.com/grubersjoe/react-github-calendar"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/grubersjoe/react-github-calendar</a
            >
          </dd>
          <dd></dd>
          <dd class="license">
            <details
              id="react-github-calendar"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> react-markdown</strong></dt>
          <dd>
            <a
              href="https://github.com/rexxars/react-markdown"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/rexxars/react-markdown</a
            >
          </dd>
          <dd>Copyright 2015 Espen Hovlandsdal</dd>
          <dd class="license">
            <details
              id="react-markdown"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> ReactPlayer</strong></dt>
          <dd>
            <a
              href="https://github.com/cookpete/react-player"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/cookpete/react-player</a
            >
          </dd>
          <dd>Copyright Pete Cook http://cookpete.com</dd>
          <dd class="license">
            <details
              id="ReactPlayer"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> Redux Persist</strong></dt>
          <dd>
            <a
              href="https://github.com/rt2zz/redux-persist"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/rt2zz/redux-persist</a
            >
          </dd>
          <dd>Copyright 2017 Zack Story</dd>
          <dd class="license">
            <details
              id="Redux Persist"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> Redux Toolkit</strong></dt>
          <dd>
            <a
              href="https://github.com/reduxjs/redux-toolkit"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/reduxjs/redux-toolkit</a
            >
          </dd>
          <dd>Copyright 2018 Mark Erikson</dd>
          <dd class="license">
            <details
              id="Redux Toolkit"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> rehype-raw</strong></dt>
          <dd>
            <a
              href="https://github.com/rehypejs/rehype-raw"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/rehypejs/rehype-raw</a
            >
          </dd>
          <dd>
            Copyright 2016 Titus Wormer &amp;lt;tituswormer@gmail.com&amp;gt;
          </dd>
          <dd class="license">
            <details
              id="rehype-raw"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> remark-gfm</strong></dt>
          <dd>
            <a
              href="https://github.com/remarkjs/remark-gfm"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/remarkjs/remark-gfm</a
            >
          </dd>
          <dd>Copyright wooorm</dd>
          <dd>Copyright johno</dd>
          <dd class="license">
            <details
              id="remark-gfm"
              ontoggle="selectLicense(this, 'MIT-License')"
            >
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> Swiper</strong></dt>
          <dd>
            <a
              href="https://github.com/nolimits4web/swiper"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/nolimits4web/swiper</a
            >
          </dd>
          <dd>Copyright 2014 Vladimir Kharlampidi</dd>
          <dd class="license">
            <details id="Swiper" ontoggle="selectLicense(this, 'MIT-License')">
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> Caffeine</strong></dt>
          <dd>
            <a
              href="https://github.com/ben-manes/caffeine"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/ben-manes/caffeine</a
            >
          </dd>
          <dd>Copyright 2014 Ben Manes.</dd>
          <dd class="license">
            <details
              id="Caffeine"
              ontoggle="selectLicense(this, 'Apache-2.0-License')"
            >
              <summary>Apache License 2.0</summary>
            </details>
          </dd>
          <dt><strong> H2</strong></dt>
          <dd>
            <a
              href="https://github.com/h2database/h2database"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/h2database/h2database</a
            >
          </dd>
          <dd>Copyright 2004-2014 H2 Group</dd>
          <dd class="license">
            <details id="H2" ontoggle="selectLicense(this, 'MPL-2.0-License')">
              <summary>Mozilla Public License 2.0</summary>
            </details>
          </dd>
          <dt><strong> lombok</strong></dt>
          <dd>
            <a
              href="https://github.com/rzwitserloot/lombok"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/rzwitserloot/lombok</a
            >
          </dd>
          <dd>Copyright 2009-2015 The Project Lombok Authors.</dd>
          <dd class="license">
            <details id="lombok" ontoggle="selectLicense(this, 'MIT-License')">
              <summary>MIT License</summary>
            </details>
          </dd>
          <dt><strong> MySQL Connector/J</strong></dt>
          <dd>
            <a
              href="https://github.com/mysql/mysql-connector-j"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/mysql/mysql-connector-j</a
            >
          </dd>
          <dd>Copyright 2016, Oracle Corporation and/or its affiliates</dd>
          <dd class="license">
            <details
              id="MySQL Connector/J"
              ontoggle="selectLicense(this, 'Universal FOSS Exception 1.0-License')"
            >
              <summary>Universal FOSS Exception 1.0</summary>
            </details>
          </dd>
          <dt><strong> Spring Boot</strong></dt>
          <dd>
            <a
              href="https://github.com/spring-projects/spring-boot"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/spring-projects/spring-boot</a
            >
          </dd>
          <dd>Copyright 2012-2020 Pivotal, Inc.</dd>
          <dd class="license">
            <details
              id="Spring Boot"
              ontoggle="selectLicense(this, 'Apache-2.0-License')"
            >
              <summary>Apache License 2.0</summary>
            </details>
          </dd>
          <dt><strong> Spring Cloud OpenFeign</strong></dt>
          <dd>
            <a
              href="https://github.com/spring-cloud/spring-cloud-openfeign"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/spring-cloud/spring-cloud-openfeign</a
            >
          </dd>
          <dd>Copyright 2020 VMware, Inc. or its affiliates</dd>
          <dd class="license">
            <details
              id="Spring Cloud OpenFeign"
              ontoggle="selectLicense(this, 'Apache-2.0-License')"
            >
              <summary>Apache License 2.0</summary>
            </details>
          </dd>
          <dt><strong> springdoc-openapi</strong></dt>
          <dd>
            <a
              href="https://github.com/springdoc/springdoc-openapi"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/springdoc/springdoc-openapi</a
            >
          </dd>
          <dd>Copyright property of respective owners</dd>
          <dd class="license">
            <details
              id="springdoc-openapi"
              ontoggle="selectLicense(this, 'Apache-2.0-License')"
            >
              <summary>Apache License 2.0</summary>
            </details>
          </dd>
        </dl>
      </div>

      <div class="licenses">
        <div id="BSD-2-Clause-License">
          <h1>BSD 2-Clause &quot;Simplified&quot; License</h1>
          <pre style="white-space: pre-wrap">
Copyright (c) 2024 DevTeamOss . All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot; AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        </pre
          >
        </div>
        <div id="CC-BY-4.0-License">
          <h1>Creative Commons Attribution 4.0 International</h1>
          <pre style="white-space: pre-wrap">
Creative Commons Attribution 4.0 International

 Creative Commons Corporation (“Creative Commons”) is not a law firm and does not provide legal services or legal advice. Distribution of Creative Commons public licenses does not create a lawyer-client or other relationship. Creative Commons makes its licenses and related information available on an “as-is” basis. Creative Commons gives no warranties regarding its licenses, any material licensed under their terms and conditions, or any related information. Creative Commons disclaims all liability for damages resulting from their use to the fullest extent possible.

Using Creative Commons Public Licenses

Creative Commons public licenses provide a standard set of terms and conditions that creators and other rights holders may use to share original works of authorship and other material subject to copyright and certain other rights specified in the public license below. The following considerations are for informational purposes only, are not exhaustive, and do not form part of our licenses.

Considerations for licensors: Our public licenses are intended for use by those authorized to give the public permission to use material in ways otherwise restricted by copyright and certain other rights. Our licenses are irrevocable. Licensors should read and understand the terms and conditions of the license they choose before applying it. Licensors should also secure all rights necessary before applying our licenses so that the public can reuse the material as expected. Licensors should clearly mark any material not subject to the license. This includes other CC-licensed material, or material used under an exception or limitation to copyright. More considerations for licensors.

Considerations for the public: By using one of our public licenses, a licensor grants the public permission to use the licensed material under specified terms and conditions. If the licensor’s permission is not necessary for any reason–for example, because of any applicable exception or limitation to copyright–then that use is not regulated by the license. Our licenses grant only permissions under copyright and certain other rights that a licensor has authority to grant. Use of the licensed material may still be restricted for other reasons, including because others have copyright or other rights in the material. A licensor may make special requests, such as asking that all changes be marked or described. Although not required by our licenses, you are encouraged to respect those requests where reasonable. More considerations for the public.

Creative Commons Attribution 4.0 International Public License

By exercising the Licensed Rights (defined below), You accept and agree to be bound by the terms and conditions of this Creative Commons Attribution 4.0 International Public License (&quot;Public License&quot;). To the extent this Public License may be interpreted as a contract, You are granted the Licensed Rights in consideration of Your acceptance of these terms and conditions, and the Licensor grants You such rights in consideration of benefits the Licensor receives from making the Licensed Material available under these terms and conditions.

Section 1 – Definitions.

     a.\tAdapted Material means material subject to Copyright and Similar Rights that is derived from or based upon the Licensed Material and in which the Licensed Material is translated, altered, arranged, transformed, or otherwise modified in a manner requiring permission under the Copyright and Similar Rights held by the Licensor. For purposes of this Public License, where the Licensed Material is a musical work, performance, or sound recording, Adapted Material is always produced where the Licensed Material is synched in timed relation with a moving image.

     b.\tAdapter's License means the license You apply to Your Copyright and Similar Rights in Your contributions to Adapted Material in accordance with the terms and conditions of this Public License.

     c.\tCopyright and Similar Rights means copyright and/or similar rights closely related to copyright including, without limitation, performance, broadcast, sound recording, and Sui Generis Database Rights, without regard to how the rights are labeled or categorized. For purposes of this Public License, the rights specified in Section 2(b)(1)-(2) are not Copyright and Similar Rights.

     d.\tEffective Technological Measures means those measures that, in the absence of proper authority, may not be circumvented under laws fulfilling obligations under Article 11 of the WIPO Copyright Treaty adopted on December 20, 1996, and/or similar international agreements.

     e.\tExceptions and Limitations means fair use, fair dealing, and/or any other exception or limitation to Copyright and Similar Rights that applies to Your use of the Licensed Material.

     f.\tLicensed Material means the artistic or literary work, database, or other material to which the Licensor applied this Public License.

     g.\tLicensed Rights means the rights granted to You subject to the terms and conditions of this Public License, which are limited to all Copyright and Similar Rights that apply to Your use of the Licensed Material and that the Licensor has authority to license.

     h.\tLicensor means the individual(s) or entity(ies) granting rights under this Public License.

     i.\tShare means to provide material to the public by any means or process that requires permission under the Licensed Rights, such as reproduction, public display, public performance, distribution, dissemination, communication, or importation, and to make material available to the public including in ways that members of the public may access the material from a place and at a time individually chosen by them.

     j.\tSui Generis Database Rights means rights other than copyright resulting from Directive 96/9/EC of the European Parliament and of the Council of 11 March 1996 on the legal protection of databases, as amended and/or succeeded, as well as other essentially equivalent rights anywhere in the world.

     k.\tYou means the individual or entity exercising the Licensed Rights under this Public License. Your has a corresponding meaning.

Section 2 – Scope.

     a.\tLicense grant.

          1. Subject to the terms and conditions of this Public License, the Licensor hereby grants You a worldwide, royalty-free, non-sublicensable, non-exclusive, irrevocable license to exercise the Licensed Rights in the Licensed Material to:

               A. reproduce and Share the Licensed Material, in whole or in part; and

               B. produce, reproduce, and Share Adapted Material.

          2. Exceptions and Limitations. For the avoidance of doubt, where Exceptions and Limitations apply to Your use, this Public License does not apply, and You do not need to comply with its terms and conditions.

          3. Term. The term of this Public License is specified in Section 6(a).

          4. Media and formats; technical modifications allowed. The Licensor authorizes You to exercise the Licensed Rights in all media and formats whether now known or hereafter created, and to make technical modifications necessary to do so. The Licensor waives and/or agrees not to assert any right or authority to forbid You from making technical modifications necessary to exercise the Licensed Rights, including technical modifications necessary to circumvent Effective Technological Measures. For purposes of this Public License, simply making modifications authorized by this Section 2(a)(4) never produces Adapted Material.

          5. Downstream recipients.

               A. Offer from the Licensor – Licensed Material. Every recipient of the Licensed Material automatically receives an offer from the Licensor to exercise the Licensed Rights under the terms and conditions of this Public License.

               B. No downstream restrictions. You may not offer or impose any additional or different terms or conditions on, or apply any Effective Technological Measures to, the Licensed Material if doing so restricts exercise of the Licensed Rights by any recipient of the Licensed Material.

          6.  No endorsement. Nothing in this Public License constitutes or may be construed as permission to assert or imply that You are, or that Your use of the Licensed Material is, connected with, or sponsored, endorsed, or granted official status by, the Licensor or others designated to receive attribution as provided in Section 3(a)(1)(A)(i).

b. Other rights.

          1. Moral rights, such as the right of integrity, are not licensed under this Public License, nor are publicity, privacy, and/or other similar personality rights; however, to the extent possible, the Licensor waives and/or agrees not to assert any such rights held by the Licensor to the limited extent necessary to allow You to exercise the Licensed Rights, but not otherwise.

          2. Patent and trademark rights are not licensed under this Public License.

          3. To the extent possible, the Licensor waives any right to collect royalties from You for the exercise of the Licensed Rights, whether directly or through a collecting society under any voluntary or waivable statutory or compulsory licensing scheme. In all other cases the Licensor expressly reserves any right to collect such royalties.

Section 3 – License Conditions.

Your exercise of the Licensed Rights is expressly made subject to the following conditions.

     a.\tAttribution.

          1. If You Share the Licensed Material (including in modified form), You must:

               A. retain the following if it is supplied by the Licensor with the Licensed Material:

                    i. identification of the creator(s) of the Licensed Material and any others designated to receive attribution, in any reasonable manner requested by the Licensor (including by pseudonym if designated);

                    ii. a copyright notice;

                    iii. a notice that refers to this Public License;

                    iv.\ta notice that refers to the disclaimer of warranties;

                    v. a URI or hyperlink to the Licensed Material to the extent reasonably practicable;

               B. indicate if You modified the Licensed Material and retain an indication of any previous modifications; and

               C. indicate the Licensed Material is licensed under this Public License, and include the text of, or the URI or hyperlink to, this Public License.

          2. You may satisfy the conditions in Section 3(a)(1) in any reasonable manner based on the medium, means, and context in which You Share the Licensed Material. For example, it may be reasonable to satisfy the conditions by providing a URI or hyperlink to a resource that includes the required information.

          3. If requested by the Licensor, You must remove any of the information required by Section 3(a)(1)(A) to the extent reasonably practicable.

          4. If You Share Adapted Material You produce, the Adapter's License You apply must not prevent recipients of the Adapted Material from complying with this Public License.

Section 4 – Sui Generis Database Rights.

Where the Licensed Rights include Sui Generis Database Rights that apply to Your use of the Licensed Material:

     a.\tfor the avoidance of doubt, Section 2(a)(1) grants You the right to extract, reuse, reproduce, and Share all or a substantial portion of the contents of the database;

     b.\tif You include all or a substantial portion of the database contents in a database in which You have Sui Generis Database Rights, then the database in which You have Sui Generis Database Rights (but not its individual contents) is Adapted Material; and

     c.\tYou must comply with the conditions in Section 3(a) if You Share all or a substantial portion of the contents of the database.
For the avoidance of doubt, this Section 4 supplements and does not replace Your obligations under this Public License where the Licensed Rights include other Copyright and Similar Rights.

Section 5 – Disclaimer of Warranties and Limitation of Liability.

     a.\tUnless otherwise separately undertaken by the Licensor, to the extent possible, the Licensor offers the Licensed Material as-is and as-available, and makes no representations or warranties of any kind concerning the Licensed Material, whether express, implied, statutory, or other. This includes, without limitation, warranties of title, merchantability, fitness for a particular purpose, non-infringement, absence of latent or other defects, accuracy, or the presence or absence of errors, whether or not known or discoverable. Where disclaimers of warranties are not allowed in full or in part, this disclaimer may not apply to You.

     b.\tTo the extent possible, in no event will the Licensor be liable to You on any legal theory (including, without limitation, negligence) or otherwise for any direct, special, indirect, incidental, consequential, punitive, exemplary, or other losses, costs, expenses, or damages arising out of this Public License or use of the Licensed Material, even if the Licensor has been advised of the possibility of such losses, costs, expenses, or damages. Where a limitation of liability is not allowed in full or in part, this limitation may not apply to You.

     c.\tThe disclaimer of warranties and limitation of liability provided above shall be interpreted in a manner that, to the extent possible, most closely approximates an absolute disclaimer and waiver of all liability.

Section 6 – Term and Termination.

     a.\tThis Public License applies for the term of the Copyright and Similar Rights licensed here. However, if You fail to comply with this Public License, then Your rights under this Public License terminate automatically.

     b.\tWhere Your right to use the Licensed Material has terminated under Section 6(a), it reinstates:

          1. automatically as of the date the violation is cured, provided it is cured within 30 days of Your discovery of the violation; or

          2. upon express reinstatement by the Licensor.

     c.\tFor the avoidance of doubt, this Section 6(b) does not affect any right the Licensor may have to seek remedies for Your violations of this Public License.

     d.\tFor the avoidance of doubt, the Licensor may also offer the Licensed Material under separate terms or conditions or stop distributing the Licensed Material at any time; however, doing so will not terminate this Public License.

     e.\tSections 1, 5, 6, 7, and 8 survive termination of this Public License.

Section 7 – Other Terms and Conditions.

     a.\tThe Licensor shall not be bound by any additional or different terms or conditions communicated by You unless expressly agreed.

     b.\tAny arrangements, understandings, or agreements regarding the Licensed Material not stated herein are separate from and independent of the terms and conditions of this Public License.

Section 8 – Interpretation.

     a.\tFor the avoidance of doubt, this Public License does not, and shall not be interpreted to, reduce, limit, restrict, or impose conditions on any use of the Licensed Material that could lawfully be made without permission under this Public License.

     b.\tTo the extent possible, if any provision of this Public License is deemed unenforceable, it shall be automatically reformed to the minimum extent necessary to make it enforceable. If the provision cannot be reformed, it shall be severed from this Public License without affecting the enforceability of the remaining terms and conditions.

     c.\tNo term or condition of this Public License will be waived and no failure to comply consented to unless expressly agreed to by the Licensor.

     d.\tNothing in this Public License constitutes or may be interpreted as a limitation upon, or waiver of, any privileges and immunities that apply to the Licensor or You, including from the legal processes of any jurisdiction or authority.

Creative Commons is not a party to its public licenses. Notwithstanding, Creative Commons may elect to apply one of its public licenses to material it publishes and in those instances will be considered the “Licensor.” Except for the limited purpose of indicating that material is shared under a Creative Commons public license or as otherwise permitted by the Creative Commons policies published at creativecommons.org/policies, Creative Commons does not authorize the use of the trademark “Creative Commons” or any other trademark or logo of Creative Commons without its prior written consent including, without limitation, in connection with any unauthorized modifications to any of its public licenses or any other arrangements, understandings, or agreements concerning use of licensed material. For the avoidance of doubt, this paragraph does not form part of the public licenses.

Creative Commons may be contacted at creativecommons.org.

        </pre
          >
        </div>
        <div id="MIT-License">
          <h1>MIT License</h1>
          <pre style="white-space: pre-wrap">
MIT License

Copyright (c) 2024 DevTeamOss

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </pre
          >
        </div>
        <div id="OFL-1.1-License">
          <h1>SIL Open Font License 1.1</h1>
          <pre style="white-space: pre-wrap">

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
https://openfontlicense.org


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
&quot;Font Software&quot; refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

&quot;Reserved Font Name&quot; refers to any names specified as such after the
copyright statement(s).

&quot;Original Version&quot; refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

&quot;Modified Version&quot; refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

&quot;Author&quot; refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION &amp; CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.
        </pre
          >
        </div>
        <div id="Apache-2.0-License">
          <h1>Apache License 2.0</h1>
          <pre style="white-space: pre-wrap">
Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

&quot;License&quot; shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

&quot;Licensor&quot; shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

&quot;Legal Entity&quot; shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, &quot;control&quot; means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

&quot;You&quot; (or &quot;Your&quot;) shall mean an individual or Legal Entity exercising permissions granted by this License.

&quot;Source&quot; form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

&quot;Object&quot; form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

&quot;Work&quot; shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

&quot;Derivative Works&quot; shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

&quot;Contribution&quot; shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, &quot;submitted&quot; means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as &quot;Not a Contribution.&quot;

&quot;Contributor&quot; shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

     (a) You must give any other recipients of the Work or Derivative Works a copy of this License; and

     (b) You must cause any modified files to carry prominent notices stating that You changed the files; and

     (c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

     (d) If the Work includes a &quot;NOTICE&quot; text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.

     You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

APPENDIX: How to apply the Apache License to your work.

To apply the Apache License to your work, attach the following boilerplate notice, with the fields enclosed by brackets &quot;[]&quot; replaced with your own identifying information. (Don't include the brackets!)  The text should be enclosed in the appropriate comment syntax for the file format. We also recommend that a file or class name and description of purpose be included on the same &quot;printed page&quot; as the copyright notice for easier identification within third-party archives.

Copyright 2024 DevTeamOss

Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
        </pre
          >
        </div>
        <div id="MIT-License">
          <h1>MIT License</h1>
          <pre style="white-space: pre-wrap">
MIT License

Copyright (c) 2024 DevTeamOss

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </pre
          >
        </div>
        <div id="MPL-2.0-License">
          <h1>Mozilla Public License 2.0</h1>
          <pre style="white-space: pre-wrap">
Mozilla Public License Version 2.0

   1. Definitions

      1.1. &quot;Contributor&quot; means each individual or legal entity that creates, contributes to the creation of, or owns Covered Software.

      1.2. &quot;Contributor Version&quot; means the combination of the Contributions of others (if any) used by a Contributor and that particular Contributor's Contribution.

      1.3. &quot;Contribution&quot; means Covered Software of a particular Contributor.

      1.4. &quot;Covered Software&quot; means Source Code Form to which the initial Contributor has attached the notice in Exhibit A, the Executable Form of such Source Code Form, and Modifications of such Source Code Form, in each case including portions thereof.

      1.5. &quot;Incompatible With Secondary Licenses&quot; means

         (a) that the initial Contributor has attached the notice described in Exhibit B to the Covered Software; or

         (b) that the Covered Software was made available under the terms of version 1.1 or earlier of the License, but not also under the terms of a Secondary License.

      1.6. &quot;Executable Form&quot; means any form of the work other than Source Code Form.

      1.7. &quot;Larger Work&quot; means a work that combines Covered Software with other material, in a separate file or files, that is not Covered Software.

      1.8. &quot;License&quot; means this document.

      1.9. &quot;Licensable&quot; means having the right to grant, to the maximum extent possible, whether at the time of the initial grant or subsequently, any and all of the rights conveyed by this License.

      1.10. &quot;Modifications&quot; means any of the following:

         (a) any file in Source Code Form that results from an addition to, deletion from, or modification of the contents of Covered Software; or

         (b) any new file in Source Code Form that contains any Covered Software.

      1.11. &quot;Patent Claims&quot; of a Contributor means any patent claim(s), including without limitation, method, process, and apparatus claims, in any patent Licensable by such Contributor that would be infringed, but for the grant of the License, by the making, using, selling, offering for sale, having made, import, or transfer of either its Contributions or its Contributor Version.

      1.12. &quot;Secondary License&quot; means either the GNU General Public License, Version 2.0, the GNU Lesser General Public License, Version 2.1, the GNU Affero General Public License, Version 3.0, or any later versions of those licenses.

      1.13. &quot;Source Code Form&quot; means the form of the work preferred for making modifications.

      1.14. &quot;You&quot; (or &quot;Your&quot;) means an individual or a legal entity exercising rights under this License. For legal entities, &quot;You&quot; includes any entity that controls, is controlled by, or is under common control with You. For purposes of this definition, &quot;control&quot; means (a) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (b) ownership of more than fifty percent (50%) of the outstanding shares or beneficial ownership of such entity.

   2. License Grants and Conditions

      2.1. Grants

      Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license:

         (a) under intellectual property rights (other than patent or trademark) Licensable by such Contributor to use, reproduce, make available, modify, display, perform, distribute, and otherwise exploit its Contributions, either on an unmodified basis, with Modifications, or as part of a Larger Work; and

         (b) under Patent Claims of such Contributor to make, use, sell, offer for sale, have made, import, and otherwise transfer either its Contributions or its Contributor Version.

      2.2. Effective Date

      The licenses granted in Section 2.1 with respect to any Contribution become effective for each Contribution on the date the Contributor first distributes such Contribution.

      2.3. Limitations on Grant Scope

      The licenses granted in this Section 2 are the only rights granted under this License. No additional rights or licenses will be implied from the distribution or licensing of Covered Software under this License. Notwithstanding Section 2.1(b) above, no patent license is granted by a Contributor:

         (a) for any code that a Contributor has removed from Covered Software; or

         (b) for infringements caused by: (i) Your and any other third party's modifications of Covered Software, or (ii) the combination of its Contributions with other software (except as part of its Contributor Version); or

         (c) under Patent Claims infringed by Covered Software in the absence of its Contributions.

      This License does not grant any rights in the trademarks, service marks, or logos of any Contributor (except as may be necessary to comply with the notice requirements in Section 3.4).

      2.4. Subsequent Licenses

      No Contributor makes additional grants as a result of Your choice to distribute the Covered Software under a subsequent version of this License (see Section 10.2) or under the terms of a Secondary License (if permitted under the terms of Section 3.3).

      2.5. Representation

      Each Contributor represents that the Contributor believes its Contributions are its original creation(s) or it has sufficient rights to grant the rights to its Contributions conveyed by this License.

      2.6. Fair Use

      This License is not intended to limit any rights You have under applicable copyright doctrines of fair use, fair dealing, or other equivalents.

      2.7. Conditions

      Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted in Section 2.1.

   3. Responsibilities

      3.1. Distribution of Source Form

      All distribution of Covered Software in Source Code Form, including any Modifications that You create or to which You contribute, must be under the terms of this License. You must inform recipients that the Source Code Form of the Covered Software is governed by the terms of this License, and how they can obtain a copy of this License. You may not attempt to alter or restrict the recipients' rights in the Source Code Form.

      3.2. Distribution of Executable Form

      If You distribute Covered Software in Executable Form then:

         (a) such Covered Software must also be made available in Source Code Form, as described in Section 3.1, and You must inform recipients of the Executable Form how they can obtain a copy of such Source Code Form by reasonable means in a timely manner, at a charge no more than the cost of distribution to the recipient; and

         (b) You may distribute such Executable Form under the terms of this License, or sublicense it under different terms, provided that the license for the Executable Form does not attempt to limit or alter the recipients' rights in the Source Code Form under this License.

      3.3. Distribution of a Larger Work

      You may create and distribute a Larger Work under terms of Your choice, provided that You also comply with the requirements of this License for the Covered Software. If the Larger Work is a combination of Covered Software with a work governed by one or more Secondary Licenses, and the Covered Software is not Incompatible With Secondary Licenses, this License permits You to additionally distribute such Covered Software under the terms of such Secondary License(s), so that the recipient of the Larger Work may, at their option, further distribute the Covered Software under the terms of either this License or such Secondary License(s).

      3.4. Notices

      You may not remove or alter the substance of any license notices (including copyright notices, patent notices, disclaimers of warranty, or limitations of liability) contained within the Source Code Form of the Covered Software, except that You may alter any license notices to the extent required to remedy known factual inaccuracies.

      3.5. Application of Additional Terms

      You may choose to offer, and to charge a fee for, warranty, support, indemnity or liability obligations to one or more recipients of Covered Software. However, You may do so only on Your own behalf, and not on behalf of any Contributor. You must make it absolutely clear that any such warranty, support, indemnity, or liability obligation is offered by You alone, and You hereby agree to indemnify every Contributor for any liability incurred by such Contributor as a result of warranty, support, indemnity or liability terms You offer. You may include additional disclaimers of warranty and limitations of liability specific to any jurisdiction.

   4. Inability to Comply Due to Statute or Regulation

   If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Covered Software due to statute, judicial order, or regulation then You must: (a) comply with the terms of this License to the maximum extent possible; and (b) describe the limitations and the code they affect. Such description must be placed in a text file included with all distributions of the Covered Software under this License. Except to the extent prohibited by statute or regulation, such description must be sufficiently detailed for a recipient of ordinary skill to be able to understand it.

   5. Termination

      5.1. The rights granted under this License will terminate automatically if You fail to comply with any of its terms. However, if You become compliant, then the rights granted under this License from a particular Contributor are reinstated (a) provisionally, unless and until such Contributor explicitly and finally terminates Your grants, and (b) on an ongoing basis, if such Contributor fails to notify You of the non-compliance by some reasonable means prior to 60 days after You have come back into compliance. Moreover, Your grants from a particular Contributor are reinstated on an ongoing basis if such Contributor notifies You of the non-compliance by some reasonable means, this is the first time You have received notice of non-compliance with this License from such Contributor, and You become compliant prior to 30 days after Your receipt of the notice.

      5.2. If You initiate litigation against any entity by asserting a patent infringement claim (excluding declaratory judgment actions, counter-claims, and cross-claims) alleging that a Contributor Version directly or indirectly infringes any patent, then the rights granted to You by any and all Contributors for the Covered Software under Section 2.1 of this License shall terminate.

      5.3. In the event of termination under Sections 5.1 or 5.2 above, all end user license agreements (excluding distributors and resellers) which have been validly granted by You or Your distributors under this License prior to termination shall survive termination.

   6. Disclaimer of Warranty

   Covered Software is provided under this License on an &quot;as is&quot; basis, without warranty of any kind, either expressed, implied, or statutory, including, without limitation, warranties that the Covered Software is free of defects, merchantable, fit for a particular purpose or non-infringing. The entire risk as to the quality and performance of the Covered Software is with You. Should any Covered Software prove defective in any respect, You (not any Contributor) assume the cost of any necessary servicing, repair, or correction. This disclaimer of warranty constitutes an essential part of this License. No use of any Covered Software is authorized under this License except under this disclaimer.

   7. Limitation of Liability

   Under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall any Contributor, or anyone who distributes Covered Software as permitted above, be liable to You for any direct, indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. This limitation of liability shall not apply to liability for death or personal injury resulting from such party's negligence to the extent applicable law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this exclusion and limitation may not apply to You.

   8. Litigation

   Any litigation relating to this License may be brought only in the courts of a jurisdiction where the defendant maintains its principal place of business and such litigation shall be governed by laws of that jurisdiction, without reference to its conflict-of-law provisions. Nothing in this Section shall prevent a party's ability to bring cross-claims or counter-claims.

   9. Miscellaneous

   This License represents the complete agreement concerning the subject matter hereof. If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable. Any law or regulation which provides that the language of a contract shall be construed against the drafter shall not be used to construe this License against a Contributor.

   10. Versions of the License

      10.1. New Versions

      Mozilla Foundation is the license steward. Except as provided in Section 10.3, no one other than the license steward has the right to modify or publish new versions of this License. Each version will be given a distinguishing version number.

      10.2. Effect of New Versions

      You may distribute the Covered Software under the terms of the version of the License under which You originally received the Covered Software, or under the terms of any subsequent version published by the license steward.

      10.3. Modified Versions

      If you create software not governed by this License, and you want to create a new license for such software, you may create and use a modified version of this License if you rename the license and remove any references to the name of the license steward (except to note that such modified license differs from this License).

      10.4. Distributing Source Code Form that is Incompatible With Secondary Licenses

      If You choose to distribute Source Code Form that is Incompatible With Secondary Licenses under the terms of this version of the License, the notice described in Exhibit B of this License must be attached. Exhibit A - Source Code Form License Notice

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice.

You may add additional accurate notices of copyright ownership.

Exhibit B - &quot;Incompatible With Secondary Licenses&quot; Notice

This Source Code Form is &quot;Incompatible With Secondary Licenses&quot;, as defined by the Mozilla Public License, v. 2.0.
        </pre
          >
        </div>
        <div id="Universal FOSS Exception 1.0-License">
          <h1>Universal FOSS Exception 1.0</h1>
          <pre style="white-space: pre-wrap">
The Universal FOSS Exception, Version 1.0

This page provides a copy of the Universal FOSS Exception, Version 1.0.  Here is the text:

The Universal FOSS Exception, Version 1.0

In addition to the rights set forth in the other license(s) included in the distribution for this software, data, and/or documentation (collectively the &quot;Software,&quot; and such licenses collectively with this additional permission the &quot;Software License&quot;), the copyright holders wish to facilitate interoperability with other software, data, and/or documentation distributed with complete corresponding source under a license that is OSI-approved and/or categorized by the FSF as free (collectively &quot;Other FOSS&quot;).  We therefore hereby grant the following additional permission with respect to the use and distribution of the Software with Other FOSS, and the constants, function signatures, data structures and other invocation methods used to run or interact with each of them (as to each, such software's &quot;Interfaces&quot;):

(i) The Software's Interfaces may, to the extent permitted by the license of the Other FOSS, be copied into, used and distributed in the Other FOSS in order to enable interoperability, without requiring a change to the license of the Other FOSS other than as to any Interfaces of the Software embedded therein.  The Software's Interfaces remain at all times under the Software License, including without limitation as used in the Other FOSS (which upon any such use also then contains a portion of the Software under the Software License).

(ii) The Other FOSS's Interfaces may, to the extent permitted by the license of the Other FOSS, be copied into, used and distributed in the Software in order to enable interoperability, without requiring that such Interfaces be licensed under the terms of the Software License or otherwise altering their original terms, if this does not require any portion of the Software other than such Interfaces to be licensed under the terms other than the Software License.

(iii) If only Interfaces and no other code is copied between the Software and the Other FOSS in either direction, the use and/or distribution of the Software with the Other FOSS shall not be deemed to require that the Other FOSS be licensed under the license of the Software, other than as to any Interfaces of the Software copied into the Other FOSS.  This includes, by way of example and without limitation, statically or dynamically linking the Software together with Other FOSS after enabling interoperability using the Interfaces of one or both, and distributing the resulting combination under different licenses for the respective portions thereof.

For avoidance of doubt, a license which is OSI-approved or categorized by the FSF as free, includes, for the purpose of this permission, such licenses with additional permissions, and any license that has previously been so-approved or categorized as free, even if now deprecated or otherwise no longer recognized as approved or free.  Nothing in this additional permission grants any right to distribute any portion of the Software on terms other than those of the Software License or grants any additional permission of any kind for use or distribution of the Software in conjunction with software other than Other FOSS.

When referring to the exception, you may link to it here at http://oss.oracle.com/licenses/universal-foss-exception.
        </pre
          >
        </div>
      </div>
    </div>
  </body>
</html>
<!-- successful Generated -->
`
