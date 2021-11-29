const rewire = require("rewire")
const functions = rewire("./functions")
const goToTop = functions.__get__("goToTop")
// @ponicode
describe("goToTop", () => {
    test("0", () => {
        let result = goToTop()
        expect(result).toMatchSnapshot()
    })
})
