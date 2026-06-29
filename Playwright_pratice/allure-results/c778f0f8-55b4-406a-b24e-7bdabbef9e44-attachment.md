# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameterization.test.ts >> parallel >> search flow - selenium
- Location: tests\parameterization.test.ts:11:13

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.google.com/
Call log:
  - navigating to "https://www.google.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - generic [ref=e22]:
    - 'link "World Cup 2026: The art of the elástico" [ref=e23] [cursor=pointer]':
      - /url: /search?sca_esv=2ab59e100257b972&q=FIFA+World+Cup+2026+bracket&oi=ddle&noiga=1&ct=516786401&hl=en-GB&stick=H4sIAAAAAAAC_-MQesSYwi3w8sc9YanoSWtOXmMM5ZIILsgvKikOyS8tykvMTc0rcSpKTM5OLSkWMuViDU7OL0gV0hHS4hKAKPNNLEnOcC_KLy0QEuNi80lNTC9NFeKR4uLi0M_VNzA2KDS3YtJg5FnEKu3m6eaoEJ5flJOi4FxaoGBkYGSmkAQxGgCMeSQmhwAAAA&sa=X&ved=0ahUKEwi0uo2l-KuVAxWuWesIHVnLKO4QPQgG
      - 'img "World Cup 2026: The art of the elástico" [ref=e25]'
    - button "Share" [ref=e27]:
      - generic "Share" [ref=e28] [cursor=pointer]:
        - img [ref=e32]
  - search [ref=e35]:
    - generic [ref=e37]:
      - generic [ref=e39]:
        - button "Add files and tools" [ref=e42] [cursor=pointer]:
          - img [ref=e44]
        - combobox "Search" [active] [ref=e47]
        - generic [ref=e48]:
          - generic [ref=e49]:
            - button "Search by voice" [ref=e50] [cursor=pointer]:
              - img [ref=e51]
            - button "Search by image" [ref=e53] [cursor=pointer]:
              - img [ref=e54]
          - link "AI Mode" [ref=e56] [cursor=pointer]:
            - generic [ref=e58]:
              - img [ref=e60]
              - generic [ref=e67]: AI Mode
      - generic [ref=e69]:
        - button "Google Search" [ref=e70] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e71] [cursor=pointer]
  - generic [ref=e74]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e75] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0__n6wTliPfEARGGYo94ykrSg9u_E%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwi0uo2l-KuVAxWuWesIHVnLKO4Q2ZgBCDw
    - link "বাংলা" [ref=e76] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0__n6wTliPfEARGGYo94ykrSg9u_E%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwi0uo2l-KuVAxWuWesIHVnLKO4Q2ZgBCD0
    - link "తెలుగు" [ref=e77] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0__n6wTliPfEARGGYo94ykrSg9u_E%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwi0uo2l-KuVAxWuWesIHVnLKO4Q2ZgBCD4
    - link "मराठी" [ref=e78] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0__n6wTliPfEARGGYo94ykrSg9u_E%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwi0uo2l-KuVAxWuWesIHVnLKO4Q2ZgBCD8
    - link "தமிழ்" [ref=e79] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0__n6wTliPfEARGGYo94ykrSg9u_E%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwi0uo2l-KuVAxWuWesIHVnLKO4Q2ZgBCEA
    - link "ગુજરાતી" [ref=e80] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0__n6wTliPfEARGGYo94ykrSg9u_E%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwi0uo2l-KuVAxWuWesIHVnLKO4Q2ZgBCEE
    - link "ಕನ್ನಡ" [ref=e81] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0__n6wTliPfEARGGYo94ykrSg9u_E%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwi0uo2l-KuVAxWuWesIHVnLKO4Q2ZgBCEI
    - link "മലയാളം" [ref=e82] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0__n6wTliPfEARGGYo94ykrSg9u_E%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwi0uo2l-KuVAxWuWesIHVnLKO4Q2ZgBCEM
    - link "ਪੰਜਾਬੀ" [ref=e83] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0__n6wTliPfEARGGYo94ykrSg9u_E%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwi0uo2l-KuVAxWuWesIHVnLKO4Q2ZgBCEQ
  - contentinfo [ref=e85]:
    - generic [ref=e86]: India
    - generic [ref=e87]:
      - generic [ref=e88]:
        - link "Advertising" [ref=e89] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e90] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e91] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e92]:
        - link "Privacy" [ref=e93] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e94] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e98] [cursor=pointer]:
          - generic [ref=e99]: Settings
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | 
  4  | const searchBar=[
  5  |     {keyword:"playwright",expectedTitle:"playwright"},
  6  |     {keyword:"selenium",expectedTitle:"selenium"},
  7  |     {keyword:"cypress",expectedTitle:"cypress"}
  8  | ];
  9  | test.describe('parallel',()=>{
  10 |     for(const data of searchBar){
  11 |         test(`search flow - ${data.keyword}`, async ({ page }) => {
> 12 |             await page.goto("https://www.google.com/")
     |                        ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.google.com/
  13 |             await page.locator("//textarea[@name='q']").fill(data.keyword);
  14 | 
  15 |             const firstRes= page.locator("h3").nth(0)
  16 |             await firstRes.click()
  17 | 
  18 |             await expect(page).toHaveTitle(new RegExp(data.expectedTitle,"i"))
  19 | 
  20 |         })
  21 |     }
  22 | })
```