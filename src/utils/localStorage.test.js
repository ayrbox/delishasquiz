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
      expect(localStorage.setItem).toHaveBeenLastCalledWith(boolKey, JSON.stringify(boolValue));
    });

    it('add string values', () => {
      const testKey = 'strKey';
      const testValue = 'string-value';
      set(testKey, testValue);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(testKey, JSON.stringify(testValue));
    });

    it('add object', () => {
      const objKey = 'objKey';
      const objValue = {
        name: 'Object Name',
        address: 'Address of Object',
      };
      set(objKey, objValue);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(objKey, JSON.stringify(objValue));
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
    set('strKey', 'strValue');
    set('boolKey', true);
    set('objKey', {
      name: 'User Test',
      address: 'First Address Line',
    });
  });

  it('get string', () => {
    const v = get('strKey');
    expect(localStorage.getItem).toHaveBeenLastCalledWith('strKey');
    expect(v).toEqual(expect.any(String));
  });

  it('get bool', () => {
    const b = get('boolKey');
    expect(localStorage.getItem).toHaveBeenLastCalledWith('boolKey');
    expect(b).toEqual(expect.any(Boolean));
  });

  it('get object', () => {
    const o = get('objKey');
    expect(localStorage.getItem).toHaveBeenLastCalledWith('objKey');
    expect(o).toEqual(expect.any(Object));
  });
});
