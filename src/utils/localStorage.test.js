import { set, get, del } from './localStorage';

require('jest-localstorage-mock');

describe('add/set key-value item', () => {
  describe('without key', () => {
    it('should throw an error', () => {
      expect(() => {
        set('', 'item-value');
      }).toThrow();
    });
  });

  describe('without item value', () => {
    it('should throw an error', () => {
      expect(() => {
        set('itemKey', null);
      }).toThrow();
    });
  });

  describe('with valid keys and values', () => {
    it('add boolen values', () => {
      const boolKey = 'isValid';
      const boolValue = true;
      set(boolKey, boolValue);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(boolKey, boolValue);
    });

    it('add string values', () => {
      const testKey = 'strKey';
      const testValue = 'string-value';
      set(testKey, testValue);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(testKey, testValue);
    });

    it('add object', () => {
      const objKey = 'objKey';
      const objValue = {
        test: 'Hello',
        address: 'address of object',
      };
      set(objKey, objValue);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(objKey, objValue);
    });
  });
});


describe('del item', () => {
  it('without key', () => {
    del('test');
    expect(localStorage.removeItem).toHaveBeenLastCalledWith('test');
  });
});

describe('read', () => {
  beforeEach(() => {
    set('test', 'hello');
  });

  it('get string', () => {
    const v = get('test');
    expect(localStorage.getItem).toHaveBeenLastCalledWith('test');
    expect(v).toEqual('hello');
  });
});
