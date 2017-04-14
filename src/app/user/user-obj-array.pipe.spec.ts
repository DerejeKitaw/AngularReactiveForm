import { UserObjArrayPipe } from './user-obj-array.pipe';

describe('UserObjArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new UserObjArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
