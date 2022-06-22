import { viteMockServe } from 'vite-plugin-mock'
export function setUpMockPlugin(isBuild: boolean) {
    return viteMockServe({
        mockPath: 'mock',
        localEnabled: !isBuild,
    })
}
