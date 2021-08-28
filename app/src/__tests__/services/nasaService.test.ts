import { NasaService } from "services/nasaService"
import { NasaSearchMediaType } from "types";

describe("NasaService", () => {
    const httpMock = { get: jest.fn() };
    const nasaService = new NasaService(httpMock as any);
    afterEach(() => {
        httpMock.get.mockReset()
    })

    describe("getAsset", () => {
        describe("when called with id:'1'", () => {
            beforeEach(() => {
                nasaService.getAsset("1")
            })

            it("should call 'get' with nasa url and query string", () => {
                expect(httpMock.get.mock.calls.length).toBe(1);
                expect(httpMock.get.mock.calls[0]).toEqual(["https://images-api.nasa.gov/asset/1"]);
            });
        })
    })

    describe("search", () => {
        describe("when called with 'image' media type and 'test' search string", () => {
            beforeEach(() => {
                nasaService.search(["image" as NasaSearchMediaType], "test")
            })

            it("should call 'get' with search url and corresponding params", () => {
                expect(httpMock.get.mock.calls.length).toBe(1);
                expect(httpMock.get.mock.calls[0]).toEqual(
                    [
                        "https://images-api.nasa.gov/search",
                        {
                            params: {
                                media_type: ["image"],
                                q: "test"
                            }
                        }
                    ]
                );
            })
        })
    })
})


