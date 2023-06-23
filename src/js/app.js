// TODO: write your code here

export default function showSpecialAtack({ special }) {
  const newArr = [];
  for (const {
    id, name, icon, description = 'Описание недоступно',
  } of special) {
    newArr.push({
      id,
      name,
      icon,
      description,
    });
  }
  return newArr;
}
