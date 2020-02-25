import database from '@react-native-firebase/database';
async function data(params) {
  const ref = database().ref();
  let data = await (await fetch(ref + params + '.json')).json();
  return data;
}

export default data;
