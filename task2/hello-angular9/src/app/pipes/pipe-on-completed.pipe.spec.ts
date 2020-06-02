import { PipeOnCompletedPipe } from './pipe-on-completed.pipe';

describe('PipeOnCompletedPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeOnCompletedPipe();
    expect(pipe).toBeTruthy();
  });
});
