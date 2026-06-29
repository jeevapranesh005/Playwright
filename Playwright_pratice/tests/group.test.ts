import{test,expect} from '@playwright/test'

test.describe('group1  @smoke',()=>{
    test.describe('nested',()=>{

    test('test1',async({page})=>{
        console.log("test1")
    })
    test('test2',async({page})=>{
        console.log("test2")
    })

    })

     test('out test',async({page})=>{
        console.log("out test")
    })

 
})


test.describe('group2',()=>{

    test('test3',async({page})=>{
        console.log("test3")
    })
    test('test4',async({page})=>{
        console.log("test4")
    })
})