export const get = (key) => {
  if (!key) {
    throw new Error('Key is required');
  }
  const value = localStorage.getItem(key);
  return (value === null) ? undefined : value;
};


export const set = (key, value) => {
  if (!key || !value) {
    throw new Error(`Key and Value are both mandatory. Given ${key}: {$value}`);
  }
  try {
    localStorage.setItem(key, value);
  } catch (_) {
    throw new Error(`There is an error setting. ${key}:${value}`);
  }
};


export const del = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (_) {
    throw new Error(`There is an error deleting ${key} from localStorage`);
  }
};

export default {
  get,
  set,
  del,
};
