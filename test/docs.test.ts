import { getContent } from './test-utils';

const output = {
  files: [{ format: 'docs', fileName: 'test.html' }]
};

test('mixed styles', () => {
  const config = {
    output,
    color: {
      primary: { value: '#f00' },
      secondary: { value: '#0f0' }
    },
    spacing: {
      small: { value: '8px' },
      large: { value: '64px' }
    }
  };

  expect(getContent(config)).toMatchSnapshot();
});
