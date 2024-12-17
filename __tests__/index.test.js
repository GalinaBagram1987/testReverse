import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { expect, test } from '@jest/globals';
// позволяем импотировать части функции и тесты из модуля jest

import reverse from '..src/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// создаем функцию для пути и чтения файла
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

// создаем тест на короткую строку
test('reverse, smal str', ()=> {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('')).toBe('');
});
// тест на длинную строку
test('reverse, long str', ()=> {
    const text = readFixtureFile('data.txt').trim();
    const expected = readFixtureFile('result.txt');
    expect(reverse(text)).toBe(expected);
});