const volume = require('../assets/scripts/main');
describe('Volume Icon', () => {
    test('Change icon level to 3', () => {
        expect(volume(67))
            .toBe(`./assets/media/icons/volume-level-3.svg`);
    });
    test('Change icon level to 2', () => {
        expect(volume(34))
            .toBe(`./assets/media/icons/volume-level-2.svg`);
    });
    test('Change icon level to 1', () => {
        expect(volume(1))
            .toBe(`./assets/media/icons/volume-level-1.svg`);
    });
    test('Change icon level to 0', () => {
        expect(volume(0))
            .toBe(`./assets/media/icons/volume-level-0.svg`);
    });
});
    