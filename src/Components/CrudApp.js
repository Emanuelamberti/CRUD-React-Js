import React, {useState} from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 1,
        name: "Naruto",
        anime: "Naruto",
    },
    {
        id: 2,
        name: "Goku",
        anime: "Dragon Ball Z",
    },
    {
        id: 3,
        name: "Luffy",
        anime: "One Piece",
    },
    {
        id: 4,
        name: "Shirou",
        anime: "Fate Stay Night",
    }
];

const CrudApp = () => {

    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
      data.id = Date.now();
      setDb([...db, data]);
    };

    const updateData = (data) => {
      let newData = db.map(el => el.id === data.id ? data : el);
      setDb(newData);
    };

    const deleteData = (id) => {
      let isDelete = window.confirm(
        `¿Estás seguro de eliminar el registro actual: '${id}' ?`
        );

        if(isDelete){
          let newData = db.filter(el => el.id !== id);
          setDb(newData);
        }else{
          return;
        }
    };

  return (
    <div>
      <article className="grid-1-2">
        <CrudForm 
          createData={createData} 
          updateData={updateData} 
          dataToEdit={dataToEdit} 
          setDataToEdit={setDataToEdit} 
        />

        <CrudTable data={db} 
          setDataToEdit={setDataToEdit} 
          deleteData={deleteData} 
        />
       </article>
    </div>
  )
}

export default CrudApp
