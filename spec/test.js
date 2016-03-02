beforeEach(function(){
    jasmine.getFixtures().fixturesPath = 'http://localhost:63342/karma-jasmine/html/';
    jasmine.getFixtures().load('index.html');
    //loadFixtures('index.html');


});

describe("제이커리 테스트",function(){
    it("제이커가 있으면", function(){
        expect( $('#jasmine').length ).toBe(1);
    });
});

describe("제이커리 테스트",function(){
    it("attr-id검사", function(){
        expect( $('#jasmine').attr("id") ).toBe("aaa");
    });
});
