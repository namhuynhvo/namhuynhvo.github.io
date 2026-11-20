(function () {
    var dictionary = {
        vi: {
            "brand.home": "Trang chủ Nam V.",
            "nav.label": "Điều hướng chính",
            "nav.posts": "Bài viết",
            "nav.about": "Giới thiệu",
            "nav.options": "Tùy chọn hiển thị",
            "language.group": "Ngôn ngữ",
            "theme.light": "Sáng",
            "theme.dark": "Tối",
            "theme.group": "Giao diện",
            "theme.toLight": "Chuyển sang giao diện sáng",
            "theme.toDark": "Chuyển sang giao diện tối",
            "post.back": "← Tất cả bài viết",
            "post.previous": "← Bài trước",
            "post.next": "Bài sau →",
            "subscribe.detailTitle": "Thích bài này?",
            "subscribe.detailCopy": "Nhận bài mới qua email, mỗi khi có bài mới.",
            "subscribe.label": "Email của bạn",
            "subscribe.placeholder": "you@email.com",
            "subscribe.button": "Đăng ký",
            "footer.label": "Liên kết phụ",
            "post.devops.title": "DevOps và tương lai của testing",
            "post.devops.date": "Đăng ngày 10/09/2020",
            "post.macaca.title": "Macaca giải pháp cho mobile",
            "post.macaca.date": "Đăng ngày 10/04/2020",
            "post.whitebox.title": "Hiểu gì về white box",
            "post.whitebox.date": "Đăng ngày 17/02/2020",
            "post.automation.title": "5 lý do automation chưa thay thế hoàn toàn manual",
            "post.automation.date": "Đăng ngày 01/12/2019",
            "post.books.title": "Sách cho automation tester",
            "post.books.date": "Đăng ngày 17/09/2018",
            "post.zrtp.title": "Giao thức ZRTP",
            "post.zrtp.date": "Đăng ngày 03/09/2018",
            "post.jfairy.title": "Tạo dữ liệu với JFairy",
            "post.jfairy.date": "Đăng ngày 02/09/2018"
        },
        en: {
            "brand.home": "Nam V. home",
            "nav.label": "Main navigation",
            "nav.posts": "Posts",
            "nav.about": "About",
            "nav.options": "Display options",
            "language.group": "Language",
            "theme.light": "Light",
            "theme.dark": "Dark",
            "theme.group": "Theme",
            "theme.toLight": "Switch to light mode",
            "theme.toDark": "Switch to dark mode",
            "post.back": "← All posts",
            "post.previous": "← Previous post",
            "post.next": "Next post →",
            "subscribe.detailTitle": "Like this post?",
            "subscribe.detailCopy": "Get new posts by email whenever I publish.",
            "subscribe.label": "Your email",
            "subscribe.placeholder": "you@email.com",
            "subscribe.button": "Subscribe",
            "footer.label": "Footer links",
            "post.devops.title": "DevOps and the future of testing",
            "post.devops.date": "Published Sep 10, 2020",
            "post.macaca.title": "Macaca for mobile automation",
            "post.macaca.date": "Published Apr 10, 2020",
            "post.whitebox.title": "Understanding white-box testing",
            "post.whitebox.date": "Published Feb 17, 2020",
            "post.automation.title": "5 reasons automation has not fully replaced manual testing",
            "post.automation.date": "Published Dec 01, 2019",
            "post.books.title": "Books for automation testers",
            "post.books.date": "Published Sep 17, 2018",
            "post.zrtp.title": "The ZRTP protocol",
            "post.zrtp.date": "Published Sep 03, 2018",
            "post.jfairy.title": "Generating data with JFairy",
            "post.jfairy.date": "Published Sep 02, 2018"
        }
    };

    var translatedBodies = {
        jfairy: `
                    <p>JFairy is a small and simple library for generating random test data that looks close to real-world data. You can find more information
                        <a href="https://github.com/Devskiller/jfairy" target="_blank" rel="nofollow">here</a>.
                    </p>

                    <pre class="line-numbers language-markup code-toolbar"><code class="language-java">&lt;dependency&gt;
    &lt;groupId&gt;io.codearte.jfairy&lt;/groupId&gt;
    &lt;artifactId&gt;jfairy&lt;/artifactId&gt;
    &lt;version&gt;0.5.9&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

                    <p>You can generate random personal information such as name, address, phone number, age, email, passport number, and more.</p>

                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">// first create Fairy object. By default - Locale is English
Fairy fairy = Fairy.create();

// Create person object
Person person = fairy.person();
person.getFullName();
person.getAddress();
person.getAge();
person.getEmail();
person.getDateOfBirth();
person.getPassportNumber();
person.getCompanyEmail();
person.getNationalIdentityCardNumber();</code></pre>

                    <p>Run it in a loop three times and each generated set is unique while still looking like real data.</p>

                    <pre class="line-numbers language-bash code-toolbar"><code class="language-java">Christopher Robles
106 Stillwell Avenue APT 171
Washington 29693
97
robles@yahoo.com
1920-06-20T23:52:14.933-05:00
wFNmlgnox
christopher.robles@furbainc.biz
787-29-0099
------------------------------------------------------
Nathaniel Barnett
93 Tabor Court APT 249
New York 46780
97
barnett@gmail.com
1920-10-13T13:20:39.103-05:00
1tIaHKoze
nathaniel.barnett@nonos.eu
059-17-1981
------------------------------------------------------
Aubree Mcintyre
178 Aster Court
Miami 61999
91
aubreemcintyre@yahoo.com
1926-11-15T04:59:48.768-06:00
C8cDSoSHH
aubree.mcintyre@datastorecompany.biz
151-63-1547
------------------------------------------------------</code></pre>

                    <p>JFairy does not only support English names. It also supports several other locales.</p>

                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">Fairy frFairy = Fairy.create(Locale.forLanguageTag("fr"));
Fairy svFairy = Fairy.create(Locale.forLanguageTag("sv"));
Fairy plFairy = Fairy.create(Locale.forLanguageTag("pl"));</code></pre>

                    <p>With French as the locale, for example:</p>

                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">Hector Verdier
15284 Anglet
52
hectorverdier@orange.fr
1965-08-29T19:02:27.909-05:00
DRYDOdR9Q
hector.verdier@olgroupeeurl.gouv.fr
66634487-E</code></pre>

                    <p>JFairy can also generate other objects:</p>

                    <ul>
                        <li>Credit cards, including card type and expiration dates.</li>
                        <li>Network data, such as random IP addresses and URLs.</li>
                        <li>Company data, such as names, emails, and domains.</li>
                        <li>Dates.</li>
                        <li>Text, including random words and paragraphs.</li>
                    </ul>

                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">fairy.networkProducer().ipAddress();
fairy.textProducer().latinWord();
fairy.creditCard().getVendor();
fairy.company().getUrl();</code></pre>

                    <pre class="line-numbers language-bash code-toolbar"><code class="language-java">12.205.88.19
pede consequat aliquet
Visa
http://www.quisuc.biz</code></pre>

                    <p>JFairy is lightweight and easy to use. These generators are useful for creating test data for automated test scenarios.</p>
                    <p style="text-align: right;"><em>huynh nam by <a href="http://www.testautomationguru.com/selenium-webdriver-how-to-generate-test-data-using-jfairy" target="_new" rel="nofollow">Guru</a></em></p>
        `,
        zrtp: `
                    <h1 class="post-color">Some concepts</h1>

                    <ul><li>ZRTP - Zimmerman Real-Time Transport</li></ul>

                    <p>ZRTP is a security protocol built on top of RTP/SRTP and designed by Phil Zimmermann for VoIP applications. It is a key-agreement protocol between two endpoints. The agreed keys are then used to encrypt data in a VoIP call over RTP. ZRTP uses Diffie-Hellman key exchange and SRTP encryption, without requiring a pre-shared secret or a public-key infrastructure for each session. Because it exchanges keys over RTP and is independent of the signaling protocol, ZRTP can work with VoIP protocols such as SIP, H.323, and Jingle when they use RTP for media.</p>

                    <ul><li>RTP - Real Time Protocol</li></ul>

                    <p>RTP defines a packet format for sending audio and video over the Internet. It was developed by the Audio/Video Transport Working Group and first published in 1996. RTP provides transport functions for real-time data such as voice and interactive video, including payload identification, sequence numbering, and timestamps for playback synchronization. RTP usually runs on top of UDP, but it can also run over other lower-layer protocols if they provide the services RTP needs. RTP itself does not guarantee timely delivery or packet order; the receiver uses sequence numbers to rebuild the correct order.</p>

                    <ul><li>SRTP - Secure RTP</li></ul>

                    <p>SRTP is a secure profile of RTP that adds confidentiality, integrity, and message authentication for media communication. It protects both RTP packets and RTCP messages. RTCP is normally used to send quality-of-service feedback between endpoints, so both RTP and RTCP need protection throughout a media session. SRTP reduces computation and resource usage through key-derivation mechanisms, but it does not by itself provide end-to-end authentication when traffic is bridged from an IP network to the PSTN.</p>

                    <h1 class="post-color">ZRTP message format</h1>
                    <img class="post-content" src="https://namhuynhvo.github.io/images/post/2/dinh-dang-bang-tin.png" />

                    <ul>
                        <li>The sequence number is a counter that increases for each ZRTP packet. It starts from a random value and helps estimate packet loss and detect out-of-order packets.</li>
                        <li>The ZRTP magic cookie is a 32-bit value used to identify a ZRTP packet. Its value is 0x5a525450.</li>
                        <li>The source identifier is the SSRC of the ZRTP stream.</li>
                        <li>The ZRTP message field uses an 8-octet block to encode the message type. Other 4-octet blocks encode hash type, cipher type, key-agreement type, and authentication tag type. Values are represented as ASCII strings.</li>
                        <li>The CRC field uses a 32-bit CRC for error detection.</li>
                    </ul>

                    <p>As mentioned above, ZRTP authentication uses a short authentication string, or SAS. The SAS type defines which SAS is returned to the user, so both sides can compare it verbally over the voice channel. This helps detect man-in-the-middle attacks.</p>

                    <p>All ZRTP endpoints must support base32 and may also support base256. Common SAS types are shown below.</p>
                    <img class="post-content" src="https://namhuynhvo.github.io/images/post/2/cac-kieu-sas.png" />

                    <h1 class="post-color">How ZRTP works</h1>
                    <p>When ZRTP is used to establish an SRTP session, the process has four phases:</p>

                    <ul>
                        <li>RTP session initialization: both ZRTP endpoints exchange Hello messages to confirm ZRTP support and discover common algorithms.</li>
                        <li>Negotiation: after Hello and HelloACK are exchanged, key negotiation starts with a ZRTP Commit message. ZRTP supports Diffie-Hellman and non-Diffie-Hellman modes.</li>
                        <li>Diffie-Hellman key exchange.</li>
                        <li>Authentication: the successful key exchange is confirmed by comparing the SAS. The SAS may also be authenticated through digital signatures in confirm1 or confirm2.</li>
                    </ul>

                    <img class="post-content" src="https://namhuynhvo.github.io/images/post/2/cach-thuc-hoat-dong.png" />

                    <ul>
                        <li>Alice and Bob initialize ZRTP on the media path:
                            <ul>
                                <li>Alice sends Hello to Bob in frame F1 with Alice's version, options, and ZID. Bob replies with helloAck in frame F2 with Bob's version, options, and ZID.</li>
                                <li>Alternatively, Bob sends Hello to Alice in frame F3, and Alice replies with helloAck in frame F4.</li>
                            </ul>
                        </li>
                        <li>If Bob starts the communication with Alice:
                            <ul>
                                <li>Bob sends Commit to Alice in frame F5. The Commit message contains Bob's ZID, options, and hash values.</li>
                                <li>Alice returns DHpart1 in frame F6. This message contains pvr and shared-secret hashes.</li>
                                <li>Bob returns DHpart2 in frame F7. This message contains pvi and shared-secret hashes.</li>
                            </ul>
                        </li>
                        <li>Alice and Bob create the SRTP session key:
                            <ul>
                                <li>Alice sends confirm1 in frame F8. It contains a MAC, flags such as D, A, V, E, and sig. Bob sends confirm2 in frame F9 with the same kind of fields.</li>
                                <li>Alice sends conf2Ack to Bob. The SRTP session then begins.</li>
                            </ul>
                        </li>
                    </ul>

                    <h1 class="post-color">Key properties of ZRTP</h1>

                    <ul><li>Authentication</li></ul>
                    <p>To prevent MiTM attacks, ZRTP uses the SAS. The SAS is a cryptographic hash of two public Diffie-Hellman values and is generated on both sides of the call.</p>

                    <p>For verification, both users read the SAS over the established voice connection. If both values match, both sides are using the same encryption keys. If a MiTM attack is present, the keys on the two endpoints will differ.</p>

                    <ul><li>Continuity</li></ul>
                    <p>When "baby duck security" is used, users keep a shared secret from a previous call. That secret is mixed into the next call to help authenticate the new Diffie-Hellman exchange. This means an attacker must be present from the very first session onward, making the attack harder.</p>

                    <ul><li>MiTM attack surface</li></ul>
                    <p>Even with those protections, ZRTP can still be attacked if the attacker can insert themselves into the media path, for example through ARP spoofing between Alice and a SIP proxy.</p>

                    <h1 class="post-color">The Diffie-Hellman key exchange</h1>
                    <p>Diffie-Hellman lets two parties establish a shared secret over an insecure channel without agreeing on the secret beforehand. The resulting secret is then used as a symmetric encryption key.</p>

                    <ul><li>Algorithm overview</li></ul>
                    <p>Alice and Bob want to create a shared key for symmetric encryption. They first agree on two large public numbers, q and g. Alice chooses a private integer XA and calculates YA = g^XA mod q, then sends YA to Bob. Bob chooses XB and calculates YB = g^XB mod q, then sends YB to Alice. Alice computes KA = YB^XA mod q, and Bob computes KB = YA^XB mod q. The special property is that KA = KB, so both sides arrive at the same session key.</p>

                    <ul><li>Comment</li></ul>
                    <p>For the exchange to be secure, deriving Alice's private value from her public value, or Bob's private value from his public value, must be computationally hard. If that problem is easy, an attacker can replace public keys, create a fake shared secret, and decrypt the communication.</p>

                    <h1 class="post-color">Conclusion</h1>
                    <p>ZRTP is a key-agreement protocol between two VoIP endpoints over RTP. Although it uses public-key techniques, it avoids the complexity of a public key infrastructure. It uses temporary Diffie-Hellman session keys and detects MiTM attacks by showing users a short authentication string to compare verbally. Even if users ignore the SAS, continuity based on cached secrets can still help authenticate later calls. All of this happens peer to peer through RTP packets, without relying on SIP signaling, certificate authorities, trust models, or centralized key-management servers.</p>

                    <p><em>Abbreviations:</em></p>
                    <ul>
                        <li><em>ZRTP: Zimmerman Real-Time Transport</em></li>
                        <li><em>SRTP: Secure Real-Time Transport</em></li>
                        <li><em>SAS: Short Authentication String</em></li>
                        <li><em>PKI: Public Key Infrastructure</em></li>
                        <li><em>MiTM: Man In The Middle Attack</em></li>
                    </ul>

                    <p style="text-align: right;"><em>huynh nam by <a href="https://www.rfc-editor.org/info/rfc6189" target="_new" rel="nofollow">P. Zimmermann, A. Johnston, Ed., J. Callas</a></em></p>
        `,
        books: `
                    <p>Over several years working at software companies, I have read a few books about automation testing. I hope this list gives you a few useful references.</p>

                    <ul><li>Selenium 1.0 Testing Tools: Beginner's Guide - <em style="color: #ff0000">David Burns (ISBN-10:1849510261)</em></li></ul>
                    <img height="300px" width="200px" class="post-content" src="https://namhuynhvo.github.io/images/post/3/selenium-testing-tools-beginners-guide.png" />

                    <ul><li>Selenium Design Patterns and Best Practices - <em style="color: #ff0000">Dima Kovalenko (ISBN-10:1783982705)</em></li></ul>
                    <img height="300px" width="200px" class="post-content" src="https://namhuynhvo.github.io/images/post/3/selenium-design-patterns-and-best-practices.png" />

                    <ul><li>Mastering SoapUI - <em style="color: #ff0000">Pranai Nandan (ISBN-10:178398080X)</em></li></ul>
                    <img height="300px" width="200px" class="post-content" src="https://namhuynhvo.github.io/images/post/3/mastering-soapui.png" />

                    <ul><li>Practical DevOps - <em style="color: #ff0000">Joakim Verona (ISBN-10:1785882872)</em></li></ul>
                    <img height="300px" width="200px" class="post-content" src="https://namhuynhvo.github.io/images/post/3/practical-devops.png" />

                    <ul><li>Mastering Selenium WebDriver - <em style="color: #ff0000">Mark Collin (ISBN-10:1784394351)</em></li></ul>
                    <img height="300px" width="200px" class="post-content" src="https://namhuynhvo.github.io/images/post/3/mastering-selenium-webdriver.png" />

                    <ul><li>Mastering Mobile Test Automation - <em style="color: #ff0000">Feroz Pearl Louis, Gaurav Gupta (ISBN-10:1782175423)</em></li></ul>
                    <img height="300px" width="200px" class="post-content" src="https://namhuynhvo.github.io/images/post/3/mastering-mobile-test-automation.png" />

                    <p style="text-align: right;"><em>by <a href="https://namhuynhvo.github.io/" target="_new" rel="nofollow">huynh nam</a></em></p>
        `,
        automation: `
                    <p>In this post, I want to discuss issues I have encountered while building an automation team. These are personal observations about why automation testing still cannot fully replace manual testing.</p>

                    <h1 class="post-color">Test results can still be wrong</h1>
                    <p>Any tool or software can contain defects, and external factors can also affect test results. Test data, network conditions, and outdated test scripts are common examples.</p>

                    <h1 class="post-color">Automation cannot explore on its own</h1>
                    <p>Automated tests can only execute flows that someone created for predefined scenarios. Automation cannot replace a manual tester who asks, "What happens if I do this?" Exploratory testing can move beyond fixed scripts and reveal defects that the automation author did not think about.</p>

                    <h1 class="post-color">It takes time</h1>
                    <p>Teams can spend a lot of time building an automation framework, only to realize that it does not serve the project or the company's test strategy well. Sometimes manual testing at the beginning would have been a better fit.</p>

                    <h1 class="post-color">It must be designed well</h1>
                    <p>I have seen automation frameworks that were not well designed. Some were built loosely, without structure, with messy functions and low maintainability. These frameworks often have a short life and consume a lot of time and effort when the product changes.</p>

                    <h1 class="post-color">It cannot tell us why something is wrong</h1>
                    <p>Automation results can tell us that something failed, but not always why it failed. A failing script may only say that an XPath was not found or that it could not interact with an element. We still need manual investigation to identify the real cause, which can take more time than testing manually from the start.</p>

                    <p>In my opinion, automation testing improves accuracy, coverage, scale, and speed. But it cannot always provide the full answer by itself, for the reasons above.</p>
                    <p style="text-align: right;"><em>by <a href="https://namhuynhvo.github.io/" target="_new" rel="nofollow">huynh nam</a></em></p>
        `,
        whitebox: `
                    <p>In this post, I want to talk about one software testing method: white-box testing. What is it, and how can we apply it?</p>

                    <h1 class="post-color">What does white-box testing look like?</h1>
                    <p>For this type of testing, the tester usually needs to understand at least one programming language and the code used in the software. This work is often assigned to developers. However, testers can still collaborate with developers to design tests around the code.</p>

                    <h1 class="post-color">White-box testing techniques</h1>
                    <ul><li>Unit tests - For example, if code adds two numbers together, you can test the logic with a unit test.</li></ul>
                    <img height="150px" width="100px" class="post-content" src="https://namhuynhvo.github.io/images/post/5/unit-test.png" />

                    <ul>
                        <li>Code coverage - How much code is executed by test cases.</li>
                        <li>Statement coverage - How many lines of code are executed.</li>
                        <li>Branch coverage - How many branches are executed.</li>
                        <li>Path coverage - Whether all paths have been covered.</li>
                    </ul>

                    <h1 class="post-color">Advantages of white-box testing</h1>
                    <p>The main advantage is that tests can be designed at a detailed level and can check many possible scenarios inside the software.</p>

                    <h1 class="post-color">Which testing type should we use?</h1>
                    <p>Black-box testing checks the software from the user's point of view. By running scenarios based on actual usage, it helps verify how users interact with the product and can prevent hidden defects from reaching users.</p>

                    <p>White-box testing checks the internal behavior of the software. It helps uncover defects in core logic without relying only on black-box techniques.</p>

                    <p>I do not want to argue that one technique is always better than the other. Each technique has a different purpose. Ignoring one of them reduces overall test coverage and increases the chance of missing bugs before the product reaches users.</p>
                    <p style="text-align: right;"><em>by <a href="https://namhuynhvo.github.io/" target="_new" rel="nofollow">huynh nam</a></em></p>
        `,
        macaca: `
                    <p>Locating elements on mobile with Appium Desktop can take a lot of time, and the result is not always accurate. While working on mobile automation, I tried Macaca. In my opinion, Macaca is a useful tool for inspecting elements on Android and iOS.</p>

                    <h1 class="post-color">Architecture</h1>
                    <p>You can refer to these links to learn more about Macaca:</p>
                    <ul>
                        <li><a href="https://macacajs.github.io/app-inspector" target="_blank">https://macacajs.github.io/app-inspector</a></li>
                        <li><a href="https://github.com/macacajs/app-inspector" target="_blank">https://github.com/macacajs/app-inspector</a></li>
                    </ul>
                    <img height="300px" width="600px" class="post-content" src="https://namhuynhvo.github.io/images/post/6/macaca-1.png" />

                    <h1 class="post-color">Setup for iOS</h1>
                    <p>To install app-inspector, you need a <a href="https://nodejs.org/en/" target="_blank">Node.js</a> environment. Then install the following tools:</p>

                    <ul><li>macaca-cli</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">npm install macaca-cli -g</code></pre>

                    <ul><li>usbmuxd for testing iOS devices over USB.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">brew install usbmuxd</code></pre>

                    <ul><li>ideviceinstaller for installing apps on iOS devices.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">brew install ideviceinstaller</code></pre>

                    <ul><li>ios-webkit-debug-proxy for inspecting WebViews.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">brew install ios-webkit-debug-proxy</code></pre>

                    <ul><li>macaca-ios driver</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java"># local installation
$ npm i macaca-ios --save-dev
# global installation
$ npm i macaca-ios -g</code></pre>

                    <ul><li>app-inspector</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">npm install app-inspector -g</code></pre>

                    <ul><li>Provisioning profile for xctestwd.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">cd /usr/local/lib/node_modules/macaca-ios/node_modules/xctestwd/XCTestWD</code></pre>

                    <ul><li>Open Xcode and sign with your developer account.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">open -a Xcode XCTestWD.xcodeproj</code></pre>

                    <ul><li>Select the Apple developer account.</li></ul>
                    <img height="300px" width="600px" class="post-content" src="https://namhuynhvo.github.io/images/post/6/macaca-2.png" />

                    <ul><li>Run the script with your UDID.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">xcodebuild -project XCTestWD.xcodeproj -scheme XCTestWDUITests  -destination 'platform=iOS,id=YOUR UDID' XCTESTWD_PORT=8001 clean test -allowProvisioningUpdates</code></pre>

                    <ul><li>Start app inspection.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">app-inspector -u YOUR-UDID --verbose</code></pre>

                    <img height="300px" width="600px" class="post-content" src="https://namhuynhvo.github.io/images/post/6/macaca-3.png" />

                    <h1 class="post-color">Similar setup for Android</h1>
                    <ul>
                        <li>Install the latest JDK 1.8. Note that JDK 9 is not supported.</li>
                        <li>Install Android SDK.</li>
                        <li>Set the ANDROID_HOME environment variable in ~/.bashrc or ~/.bash_profile.</li>
                    </ul>

                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">export ANDROID_HOME = /usr/local/opt/android-sdk</code></pre>

                    <ul><li>app-inspector</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">npm install app-inspector -g</code></pre>

                    <ul><li>Start app inspection.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">app-inspector -u YOUR-UDID --verbose</code></pre>

                    <p>That is it. I hope this helps anyone building mobile automation for their team.</p>
                    <p style="text-align: right;"><em>by <a href="https://namhuynhvo.github.io/" target="_new" rel="nofollow">huynh nam</a></em></p>
        `,
        devops: `
                    <p>Software development today is a long-running process. It started with the waterfall model, where most development happened before testing began. Agile later changed how teams build software. A project starts from an initial idea passed to developers, and when development is complete, the product is handed to operations teams for final delivery to users.</p>

                    <p>This can work, but one major drawback is that operations may not be considered until the end of development. To solve this, teams need to break down silos and improve integration between departments. DevOps was created as a continuous development and deployment practice that helps deliver software products faster.</p>

                    <h1 class="post-color">Architecture</h1>
                    <p>You can refer to these links to learn more about Macaca:</p>
                    <ul>
                        <li><a href="https://macacajs.github.io/app-inspector" target="_blank">https://macacajs.github.io/app-inspector</a></li>
                        <li><a href="https://github.com/macacajs/app-inspector" target="_blank">https://github.com/macacajs/app-inspector</a></li>
                    </ul>

                    <img height="300px" width="600px" class="post-content" src="https://namhuynhvo.github.io/images/post/6/macaca-1.png" />

                    <h1 class="post-color">Installing Macaca</h1>
                    <p>In this note, I will show how to set it up for iOS. To install app-inspector, you need a <a href="https://nodejs.org/en/" target="_blank">Node.js</a> environment. Then follow these steps:</p>

                    <ul><li>macaca-cli</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">npm install macaca-cli -g</code></pre>

                    <ul><li>usbmuxd for testing iOS devices over USB.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">brew install usbmuxd</code></pre>

                    <ul><li>ideviceinstaller for installing apps on iOS devices.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">brew install ideviceinstaller</code></pre>

                    <ul><li>ios-webkit-debug-proxy for checking WebViews.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">brew install ios-webkit-debug-proxy</code></pre>

                    <ul><li>macaca-ios driver</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java"># local installation
$ npm i macaca-ios --save-dev
# global installation
$ npm i macaca-ios -g</code></pre>

                    <ul><li>app-inspector</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">npm install app-inspector -g</code></pre>

                    <ul><li>Provisioning profile for xctestwd.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">cd /usr/local/lib/node_modules/macaca-ios/node_modules/xctestwd/XCTestWD</code></pre>

                    <ul><li>Open Xcode and sign with your developer account.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">open -a Xcode XCTestWD.xcodeproj</code></pre>

                    <ul><li>Select the Apple developer account.</li></ul>
                    <img height="300px" width="600px" class="post-content" src="https://namhuynhvo.github.io/images/post/6/macaca-2.png" />

                    <ul><li>Run the script with your UDID.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">xcodebuild -project XCTestWD.xcodeproj -scheme XCTestWDUITests  -destination 'platform=iOS,id=YOUR UDID' XCTESTWD_PORT=8001 clean test -allowProvisioningUpdates</code></pre>

                    <ul><li>Start app inspection.</li></ul>
                    <pre class="line-numbers language-java code-toolbar"><code class="language-java">app-inspector -u YOUR-UDID --verbose</code></pre>

                    <img height="300px" width="600px" class="post-content" src="https://namhuynhvo.github.io/images/post/6/macaca-3.png" />

                    <p>That is it. I hope this helps anyone building mobile automation for their team.</p>
                    <p style="text-align: right;"><em>by <a href="https://namhuynhvo.github.io/" target="_new" rel="nofollow">huynh nam</a></em></p>
        `
    };

    var postBySlug = {
        "1-tao-du-lieu-voi-jfairy": "jfairy",
        "2-giao-thuc-zrtp": "zrtp",
        "3-sach-cho-automation-tester": "books",
        "4-5-ly-do-automation-chua-thay-the-hoan-toan-manual": "automation",
        "5-hieu-gi-ve-white-box": "whitebox",
        "6-macaca-giai-phap-cho-mobile": "macaca"
    };

    var postOrder = [
        {
            key: "jfairy",
            slug: "1-tao-du-lieu-voi-jfairy",
            titleKey: "post.jfairy.title"
        },
        {
            key: "zrtp",
            slug: "2-giao-thuc-zrtp",
            titleKey: "post.zrtp.title"
        },
        {
            key: "books",
            slug: "3-sach-cho-automation-tester",
            titleKey: "post.books.title"
        },
        {
            key: "automation",
            slug: "4-5-ly-do-automation-chua-thay-the-hoan-toan-manual",
            titleKey: "post.automation.title"
        },
        {
            key: "whitebox",
            slug: "5-hieu-gi-ve-white-box",
            titleKey: "post.whitebox.title"
        },
        {
            key: "macaca",
            slug: "6-macaca-giai-phap-cho-mobile",
            titleKey: "post.macaca.title"
        }
    ];

    var language = getStoredValue("homeLanguage") || "vi";
    language = dictionary[language] ? language : "vi";
    var theme = getStoredValue("homeTheme") || "light";
    theme = theme === "dark" ? "dark" : "light";
    var postContent = document.querySelector(".post-content[itemprop='articleBody']");
    var originalPostContent = postContent ? postContent.innerHTML : "";
    var postKey = getPostKey();
    var postNavigation = document.querySelector(".post-navigation");
    var languageButtons = document.querySelectorAll("[data-language-option]");
    var themeButtons = document.querySelectorAll("[data-theme-option]");

    function getStoredValue(key) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function setStoredValue(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            return;
        }
    }

    function text(key) {
        return dictionary[language][key] || dictionary.vi[key] || "";
    }

    function getPostKey() {
        var parts = window.location.pathname.split("/").filter(Boolean);
        var slug = parts[parts.length - 1] || "";
        return postBySlug[slug] || "";
    }

    function applyLanguage() {
        document.documentElement.lang = language;

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            element.textContent = text(element.getAttribute("data-i18n"));
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
            element.setAttribute("aria-label", text(element.getAttribute("data-i18n-aria-label")));
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
            element.setAttribute("placeholder", text(element.getAttribute("data-i18n-placeholder")));
        });

        var postTitle = document.querySelector(".post-header h1");
        if (postTitle && postTitle.textContent.trim()) {
            document.title = postTitle.textContent.trim() + " - Nam V.";
        }

        updateLanguageButtons();
        updateThemeButtons();
        applyPostContent();
        renderPostNavigation();
    }

    function applyTheme() {
        document.body.classList.toggle("theme-dark", theme === "dark");
        updateThemeButtons();
    }

    function updateLanguageButtons() {
        languageButtons.forEach(function (button) {
            var isActive = button.getAttribute("data-language-option") === language;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
    }

    function updateThemeButtons() {
        themeButtons.forEach(function (button) {
            var option = button.getAttribute("data-theme-option");
            var isActive = option === theme;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", isActive ? "true" : "false");
            button.setAttribute("aria-label", text(option === "light" ? "theme.toLight" : "theme.toDark"));
        });
    }

    function applyPostContent() {
        if (!postContent || !postKey) {
            return;
        }

        if (language === "en" && translatedBodies[postKey]) {
            postContent.innerHTML = translatedBodies[postKey];
            loadUtterances();
            return;
        }

        postContent.innerHTML = originalPostContent;
        loadUtterances();
    }

    function loadUtterances() {
        if (!postContent || postContent.querySelector(".utterances-frame")) {
            return;
        }

        var existingScript = postContent.querySelector("script[src='https://utteranc.es/client.js']");
        if (existingScript) {
            existingScript.remove();
        }

        var script = document.createElement("script");
        script.src = "https://utteranc.es/client.js";
        script.setAttribute("repo", "namhuynhvo/namhuynhvo.github.io");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", theme === "dark" ? "github-dark" : "github-light");
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;
        postContent.appendChild(script);
    }

    function refreshUtterancesTheme() {
        if (!postContent) {
            return;
        }

        var utterances = postContent.querySelector(".utterances");
        if (utterances) {
            utterances.remove();
        }

        var existingScript = postContent.querySelector("script[src='https://utteranc.es/client.js']");
        if (existingScript) {
            existingScript.remove();
        }

        loadUtterances();
    }

    function renderPostNavigation() {
        if (!postNavigation || !postKey) {
            return;
        }

        var index = postOrder.findIndex(function (post) {
            return post.key === postKey;
        });

        if (index === -1) {
            return;
        }

        var previousPost = postOrder[index - 1];
        var nextPost = postOrder[index + 1];
        var html = "";

        postNavigation.classList.remove("has-previous-only", "has-next-only");

        if (previousPost) {
            html += createPagerCard(previousPost, "previous");
        }

        if (nextPost) {
            html += createPagerCard(nextPost, "next");
        }

        if (!previousPost && nextPost) {
            postNavigation.classList.add("has-next-only");
        }

        if (previousPost && !nextPost) {
            postNavigation.classList.add("has-previous-only");
        }

        postNavigation.innerHTML = html;
    }

    function createPagerCard(post, direction) {
        return [
            '<a class="post-pager-card post-pager-card-' + direction + '" href="../../post/' + post.slug + '/">',
            '<span>' + text(direction === "previous" ? "post.previous" : "post.next") + '</span>',
            '<strong>' + text(post.titleKey) + '</strong>',
            '</a>'
        ].join("");
    }

    languageButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            language = button.getAttribute("data-language-option");
            setStoredValue("homeLanguage", language);
            applyLanguage();
        });
    });

    themeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            theme = button.getAttribute("data-theme-option");
            setStoredValue("homeTheme", theme);
            applyTheme();
            refreshUtterancesTheme();
        });
    });

    window.addEventListener("storage", function (event) {
        if (event.key === "homeLanguage" && dictionary[event.newValue]) {
            language = event.newValue;
            applyLanguage();
        }

        if (event.key === "homeTheme") {
            theme = event.newValue === "dark" ? "dark" : "light";
            applyTheme();
            refreshUtterancesTheme();
        }
    });

    applyLanguage();
    applyTheme();
})();
