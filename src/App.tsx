import * as C from './App.styles';
import { FormEvent, useEffect, useState } from 'react';
import { Photo } from './types/Photo';
import * as Photos from './services/Photos';
import { PhotoItem } from './components/PhotoItem';



const App = () => {
  
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Photo[]>([]);
  const [uploading, setUpLoading] = useState(false);

  useEffect(() => {

    getPhotos();

  }, []);

  const getPhotos = async () => {

    setLoading(true);
    setList(await Photos.getAll());
    setLoading(false);

  };
  

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if(file && file.size > 0) {

      setUpLoading(true);
      let result = await Photos.insert(file);
      setUpLoading(false);

      if(result instanceof Error) {
        
       alert(`${result.name} - ${result.message}`);

      } else {
        let newPhotoList = [...list];
        newPhotoList.push(result);
        setList(newPhotoList);
      }
    }
}

const handleDelete = async (name: string) => {

    await Photos.deletePhoto(name);

    getPhotos();
}



  

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria De Fotos</C.Header>

        { 
          <C.UploadForm method='POST' onSubmit={handleFormSubmit} >
            <input type='file' name='image' />
            <input type='submit' name='enviar'/>

            {uploading && 'Enviando...'}

          </C.UploadForm> 
        }

        {loading &&
          <C.ScreenWarning>
            <div className='emoji'>🤚</div>
            <div className='loading'>Carregando...</div>
          </C.ScreenWarning>
        }
        
          {!loading && list.length > 0 &&
            <C.PhotoList>
                {list.map((item, index) => (
                  <PhotoItem key={index} url={item.url} name={item.name} onDelete={handleDelete} />
                  
                ))}
            </C.PhotoList>
        
          }

        {!loading && list.length === 0 &&
          <C.ScreenWarning>
            <div className='emoji'>😢</div>
            <div className='loading'>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        
        }


      </C.Area>
    </C.Container>
  )
}

export default App;