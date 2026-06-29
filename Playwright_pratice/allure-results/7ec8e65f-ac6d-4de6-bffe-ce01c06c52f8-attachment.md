# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameterization.test.ts >> parallel >> search flow - cypress
- Location: tests\parameterization.test.ts:11:13

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('h3').first()

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
      - /url: /search?sca_esv=2ab59e100257b972&q=FIFA+World+Cup+2026+bracket&oi=ddle&noiga=1&ct=516786401&hl=en-GB&stick=H4sIAAAAAAAC_-MQesSYwi3w8sc9YanoSWtOXmMM5ZIILsgvKikOyS8tykvMTc0rcSpKTM5OLSkWMuViDU7OL0gV0hHS4hKAKPNNLEnOcC_KLy0QEuNi80lNTC9NFeKR4uLi0M_VNzA2KDS3YtJg5FnEKu3m6eaoEJ5flJOi4FxaoGBkYGSmkAQxGgCMeSQmhwAAAA&sa=X&ved=0ahUKEwiJj__Z-KuVAxUfW-sIHfI9NpwQPQgG
      - 'img "World Cup 2026: The art of the elástico" [ref=e25]'
    - button "Share" [ref=e27]:
      - generic "Share" [ref=e28] [cursor=pointer]:
        - img [ref=e32]
  - search [ref=e35]:
    - generic [ref=e37]:
      - generic [ref=e39]:
        - button "Add files and tools" [ref=e42] [cursor=pointer]:
          - img [ref=e44]
        - combobox "Search" [expanded] [active] [ref=e47]:
          - text: cypress
          - listbox [ref=e49]:
            - generic [ref=e50]:
              - img [ref=e52]
              - option "cypress" [ref=e55]:
                - generic [ref=e56]: cypress
            - generic [ref=e57]:
              - img [ref=e59]
              - option "cypress oil" [ref=e62]:
                - generic [ref=e63]: cypress oil
            - option "cypress tree" [ref=e67]:
              - generic [ref=e68]: cypress tree
              - generic [ref=e69]: Mediterranean cypress — Plant
            - generic [ref=e70]:
              - img [ref=e72]
              - option "cypress automation tool" [ref=e75]:
                - generic [ref=e76]: cypress automation tool
            - option "cypress vine" [ref=e80]:
              - generic [ref=e81]: Cypress vine
              - generic [ref=e82]: Plant
            - generic [ref=e83]:
              - img [ref=e85]
              - option "cypress testing" [ref=e88]:
                - generic [ref=e89]: cypress testing
            - generic [ref=e90]:
              - img [ref=e92]
              - option "cypress oil benefits" [ref=e95]:
                - generic [ref=e96]: cypress oil benefits
            - generic [ref=e97]:
              - img [ref=e99]
              - option "cypress vs playwright" [ref=e102]:
                - generic [ref=e103]: cypress vs playwright
            - option "cypress plant" [ref=e107]:
              - generic [ref=e108]: cypress plant
              - generic [ref=e109]: Cupressus
            - generic [ref=e110]:
              - img [ref=e112]
              - option "cypress meaning" [ref=e115]:
                - generic [ref=e116]: cypress meaning
        - generic [ref=e117]:
          - button "Clear" [ref=e119] [cursor=pointer]:
            - img [ref=e121]
          - link "AI Mode" [ref=e123] [cursor=pointer]:
            - generic [ref=e125]:
              - generic [ref=e126]: AI Mode
              - img [ref=e128]
      - generic [ref=e130]:
        - generic [ref=e134]:
          - button "Google Search" [ref=e135] [cursor=pointer]
          - button "I'm Feeling Lucky" [ref=e136] [cursor=pointer]
        - button "Report inappropriate predictions" [ref=e137] [cursor=pointer]:
          - generic [ref=e138]: Report inappropriate predictions
      - generic [ref=e140]:
        - button "Google Search" [ref=e141] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e142] [cursor=pointer]
  - generic [ref=e145]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e146] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_67zpMBgtM6pCn-dVSweeeKTSGoM%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiJj__Z-KuVAxUfW-sIHfI9NpwQ2ZgBCDk
    - link "বাংলা" [ref=e147] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_67zpMBgtM6pCn-dVSweeeKTSGoM%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiJj__Z-KuVAxUfW-sIHfI9NpwQ2ZgBCDo
    - link "తెలుగు" [ref=e148] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_67zpMBgtM6pCn-dVSweeeKTSGoM%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiJj__Z-KuVAxUfW-sIHfI9NpwQ2ZgBCDs
    - link "मराठी" [ref=e149] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_67zpMBgtM6pCn-dVSweeeKTSGoM%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiJj__Z-KuVAxUfW-sIHfI9NpwQ2ZgBCDw
    - link "தமிழ்" [ref=e150] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_67zpMBgtM6pCn-dVSweeeKTSGoM%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiJj__Z-KuVAxUfW-sIHfI9NpwQ2ZgBCD0
    - link "ગુજરાતી" [ref=e151] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_67zpMBgtM6pCn-dVSweeeKTSGoM%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiJj__Z-KuVAxUfW-sIHfI9NpwQ2ZgBCD4
    - link "ಕನ್ನಡ" [ref=e152] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_67zpMBgtM6pCn-dVSweeeKTSGoM%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiJj__Z-KuVAxUfW-sIHfI9NpwQ2ZgBCD8
    - link "മലയാളം" [ref=e153] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_67zpMBgtM6pCn-dVSweeeKTSGoM%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiJj__Z-KuVAxUfW-sIHfI9NpwQ2ZgBCEA
    - link "ਪੰਜਾਬੀ" [ref=e154] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_67zpMBgtM6pCn-dVSweeeKTSGoM%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiJj__Z-KuVAxUfW-sIHfI9NpwQ2ZgBCEE
  - contentinfo [ref=e156]:
    - generic [ref=e157]: India
    - generic [ref=e158]:
      - generic [ref=e159]:
        - link "Advertising" [ref=e160] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e161] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e162] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e163]:
        - link "Privacy" [ref=e164] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e165] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e169] [cursor=pointer]:
          - generic [ref=e170]: Settings
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
  12 |             await page.goto("https://www.google.com/")
  13 |             await page.locator("//textarea[@name='q']").fill(data.keyword);
  14 | 
  15 |             const firstRes= page.locator("h3").first()
> 16 |             await firstRes.click()
     |                            ^ Error: locator.click: Test timeout of 60000ms exceeded.
  17 | 
  18 |             await expect(page).toHaveTitle(new RegExp(data.expectedTitle,"i"))
  19 | 
  20 |         })
  21 |     }
  22 | })
```