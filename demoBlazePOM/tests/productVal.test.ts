import{test,expect} from '../fixtures/basefixture'
import loginData from '../testData/loginData.json'
test.describe('product val',()=>{

    test.beforeEach(async({loginpage})=>{
        await loginpage.navigate()
        //  await loginpage.login(
        //     loginData.valid.username,
        //     loginData.valid.password
        // )
        // await expect(loginpage.welcome).toBeTruthy()

    })
    test('product val',async({home,product})=>{
        await home.laptopclick()
        //console.log(await product.MacName)
        await expect(product.MacName).toHaveText("MacBook Pro")

    })
    
})