# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation\frame.test.ts >> Frame2 - Inner Frame
- Location: tests\automation\frame.test.ts:21:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('iframe#firstFr').contentFrame().locator('iframe[src=\'innerFrame\']').contentFrame().locator('input[name=\'email\']')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9] [cursor=pointer]:
            - /url: /test
          - generic [ref=e10]:
            - button "Products" [ref=e11] [cursor=pointer]:
              - text: Products
              - img [ref=e12]
            - generic:
              - link "Ortoni Report":
                - /url: /product/ortoni-report
              - link "LetXPath":
                - /url: /product/letxpath
              - link "Playwright Runner":
                - /url: /product/playwright-runner
          - generic [ref=e15]:
            - button "Grooming" [ref=e16] [cursor=pointer]:
              - text: Grooming
              - img [ref=e17]
            - generic:
              - link "Test Practice":
                - /url: /test-practice
              - link "Interview Q & A":
                - /url: /interview
              - link "Playwright Quiz":
                - /url: /pw-quiz
          - link "Courses" [ref=e20] [cursor=pointer]:
            - /url: /courses
          - link "Contact" [ref=e21] [cursor=pointer]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32] [cursor=pointer]:
              - /url: /test
              - img [ref=e33]
              - generic [ref=e38]: Workspace
            - img [ref=e39]
            - generic [ref=e41]: Frame
          - heading "Frame" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]: Let's go for a frame practice 😉
            - iframe [active] [ref=e51]:
              - generic [ref=f1e1]:
                - generic [ref=f1e4]:
                  - heading "Enter Details" [level=1] [ref=f1e5]
                  - generic [ref=f1e6]:
                    - generic [ref=f1e7]:
                      - generic [ref=f1e8]: First Name
                      - textbox "Enter name" [ref=f1e9]: jeeva
                    - generic [ref=f1e10]:
                      - generic [ref=f1e11]: Last Name
                      - textbox "Enter email" [active] [ref=f1e12]: p
                  - paragraph [ref=f1e14]: You have entered jeeva p
                  - iframe [ref=f1e16]:
                    - generic [active] [ref=f5e1]:
                      - generic [ref=f5e5]:
                        - generic [ref=f5e6]: Email
                        - textbox "Enter email" [ref=f5e7]
                      - insertion [ref=f5e9]:
                        - iframe [ref=f5e11]:
                          - generic [ref=f7e3]:
                            - button [ref=f7e4]:
                              - img [ref=f7e5]
                            - generic [ref=f7e7]:
                              - generic [ref=f7e9]:
                                - generic [ref=f7e13]:
                                  - button "Play video" [ref=f7e17] [cursor=pointer]:
                                    - img [ref=f7e18]
                                  - button "Unmute video" [ref=f7e23] [cursor=pointer]
                                - generic [ref=f7e30]:
                                  - button "Learn more" [ref=f7e32] [cursor=pointer]
                                  - button "Replay" [ref=f7e34] [cursor=pointer]
                                - img [ref=f7e37]
                              - button "Learn more" [ref=f7e43] [cursor=pointer]
                - insertion [ref=f1e18]:
                  - generic [ref=f1e21]:
                    - heading "These are topics related to the article that might interest you" [level=2] [ref=f1e23]: Discover more
                    - link "LetCode Courses" [ref=f1e24] [cursor=pointer]:
                      - generic "LetCode Courses" [ref=f1e25]
                      - img [ref=f1e27]
                    - link "Software" [ref=f1e29] [cursor=pointer]:
                      - generic "Software" [ref=f1e30]
                      - img [ref=f1e32]
                    - link "Test Automation Tools" [ref=f1e34] [cursor=pointer]:
                      - generic "Test Automation Tools" [ref=f1e35]
                      - img [ref=f1e37]
          - generic [ref=e53]:
            - generic [ref=e54]:
              - img [ref=e55]
              - heading "Learning Points" [level=3] [ref=e58]
            - list [ref=e59]:
              - listitem [ref=e60]:
                - img [ref=e61]
                - generic [ref=e64]: Target Locator
              - listitem [ref=e65]:
                - img [ref=e66]
                - generic [ref=e69]: switchTo()
              - listitem [ref=e70]:
                - img [ref=e71]
                - generic [ref=e74]: defaultContent()
              - listitem [ref=e75]:
                - img [ref=e76]
                - generic [ref=e79]: parentFrame()
              - listitem [ref=e80]:
                - img [ref=e81]
                - generic [ref=e84]: Overloading concept - JAVA
            - generic [ref=e85]:
              - link "Watch Tutorial" [ref=e86] [cursor=pointer]:
                - /url: /video/frame
                - img [ref=e87]
                - generic [ref=e89]: Watch Tutorial
              - generic [ref=e90]:
                - text: "Practice ID:"
                - code [ref=e91]: frame
          - generic [ref=e92]:
            - generic:
              - generic:
                - insertion
        - generic:
          - generic:
            - generic:
              - insertion
    - contentinfo [ref=e93]:
      - generic [ref=e94]:
        - paragraph [ref=e95]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e96] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e97] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e98]:
          - link "GitHub" [ref=e99] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e100]
          - link "YouTube" [ref=e103] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e104]
          - link "LinkedIn" [ref=e107] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e108]
          - link "Contact" [ref=e113] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e114] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e116]:
    - generic [ref=e119]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e121]: Discover more
      - link "Learning Platform Access" [ref=e122] [cursor=pointer]:
        - generic "Learning Platform Access" [ref=e123]
        - img [ref=e125]
      - link "Online Learning Modules" [ref=e127] [cursor=pointer]:
        - generic "Online Learning Modules" [ref=e128]
        - img [ref=e130]
      - link "Learning Resources Library" [ref=e132] [cursor=pointer]:
        - generic "Learning Resources Library" [ref=e133]
        - img [ref=e135]
  - generic [ref=e137]:
    - generic [ref=e138] [cursor=pointer]:
      - img [ref=e140]
      - link "Go to shopping options for Selenium Webdriver Training" [ref=e142]: Selenium Webdriver Training
    - button "Close shopping anchor" [ref=e143]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.beforeEach(async ({ page }) => {
  4  |   await page.goto("https://letcode.in/frame");
  5  | });
  6  | 
  7  | test("Frame", async ({ page }) => {
  8  | 
  9  |   const total_frame = page.frames();
  10 |   console.log("No of Frames: ", total_frame.length);
  11 | 
  12 |   const firstFrame = page.frameLocator("iframe#firstFr");
  13 | 
  14 |   await firstFrame.locator("input[name='fname']").fill("Prasanna");
  15 |   await firstFrame.locator("input[name='lname']").fill("K");
  16 | 
  17 |   await expect(firstFrame.locator("p.text-sm.font-semibold.text-center"))
  18 |     .toContainText("Prasanna K");
  19 | });
  20 | 
  21 | test("Frame2 - Inner Frame", async ({ page }) => {
  22 | 
  23 |   const firstFrame = page.frameLocator("iframe#firstFr");
  24 | 
  25 |   await firstFrame.locator("input[name='fname']").fill("jeeva");
  26 |   await firstFrame.locator("input[name='lname']").fill("p");
  27 | 
  28 |   await expect(firstFrame.locator("p.text-sm.font-semibold.text-center"))
  29 |     .toContainText("jeeva p");
  30 | 
  31 |   
  32 |   const innerFrame = firstFrame.frameLocator("iframe[src='innerFrame']");
  33 | 
> 34 |   await innerFrame.locator("input[name='email']").fill("jeeva@gmail.com");
     |                                                   ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  35 | 
  36 |   await page.waitForTimeout(2000)
  37 | 
  38 | });
  39 | 
  40 | test.afterEach(async () => {
  41 |   console.log("Test is completed");
  42 | });
```