import { useState } from "react"
import { database } from "./services/firebase";
import { push, ref, set } from "firebase/database";
import CSVReader from 'react-csv-reader'

import './app.css'
import icon from './assets/file-csv.svg'


export default function App() {
  const pasrseCSV = (text) => {
    
    const result = {
      product: {
        commodityCode: {
          header: String,
          data: []
        },
        countryOfManufacture: {
          header: String,
          data: []
        },
        construction: {
          header: String,
          data: []
        },
        material1: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material2: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material3: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material4: {  
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material5: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material6: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material7: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material8: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material9: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material10: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        }
      }
      
    }
  
    const [header, ...content]= text;

    for (let i = 0; i < header.length; i++) {
      for (let j = 0; j < content.length; j++) {
        result.product[j] = [
          result.product.commodityCode.header = header[0],
          result.product.commodityCode.data[j] = content[j][0],
          result.product.countryOfManufacture.header = header[1],
          result.product.countryOfManufacture.data[j] = content[j][1],
          result.product.construction.header = header[2],
          result.product.construction.data[j] = content[j][2],
          result.product.material1.header = header[3],
          result.product.material1.data.materialType[j] = content[j][3],
          result.product.material1.data.percentage[j] = content[j][4],
          result.product.material2.header = header[5],
          result.product.material2.data.materialType[j] = content[j][5],
          result.product.material2.data.percentage[j] = content[j][6],
          result.product.material3.header = header[7],
          result.product.material3.data.materialType[j] = content[j][7],
          result.product.material3.data.percentage[j] = content[j][8],
          result.product.material4.header = header[9],
          result.product.material4.data.materialType[j] = content[j][9],
          result.product.material4.data.percentage[j] = content[j][10],
          result.product.material5.header = header[11],
          result.product.material5.data.materialType[j] = content[j][11],
          result.product.material5.data.percentage[j] = content[j][12],
          result.product.material6.header = header[12],
          result.product.material6.data.materialType[j] = content[j][12],
          result.product.material6.data.percentage[j] = content[j][13],
          result.product.material7.header = header[13],
          result.product.material7.data.materialType[j] = content[j][13],
          result.product.material7.data.percentage[j] = content[j][14],
          result.product.material8.header = header[15],
          result.product.material8.data.materialType[j] = content[j][15],
          result.product.material8.data.percentage[j] = content[j][16],
          result.product.material9.header = header[19],
          result.product.material9.data.materialType[j] = content[j][19],
          result.product.material9.data.percentage[j] = content[j][20],
          result.product.material10.header = header[21],
          result.product.material10.data.materialType[j] = content[j][21],
          result.product.material10.data.percentage[j] = content[j][22]

        ]
      }
    }
    console.log(result);
  
    const csvRef = ref(database, 'Product');
    
    const firebaseCsv = push(csvRef);
    set(firebaseCsv, {
      Product: {
        CommodityCode: result.product.commodityCode,
        CountryOfManufacture: result.product.countryOfManufacture,
        Construction: result.product.construction,
        Materials: {
          Material_1: {
            Header: result.product.material1.header,
            Material: result.product.material1.data
          },
          Material_2: {
            Header: result.product.material2.header,
            Material: result.product.material2.data
          },
          Material_3: {
            Header: result.product.material3.header,
            Material: result.product.material3.data
          },
          Material_4: {
            Header: result.product.material4.header,
            Material: result.product.material4.data
          },
          Material_5: {
            Header: result.product.material5.header,
            Material: result.product.material5.data
          },
          Material_6: {
            Header: result.product.material6.header,
            Material: result.product.material6.data
          },
          Material_7: {
            Header: result.product.material7.header,
            Material: result.product.material7.data
          },
          Material_8: {
            Header: result.product.material8.header,
            Material: result.product.material8.data
          },
          Material_9: {
            Header: result.product.material9.header,
            Material: result.product.material9.data
          },
          Material_10: {
            Header: result.product.material10.header,
            Material: result.product.material10.data
          }
        } 
          
      }
    })

    alert('The file has been uploaded to the database');

    return result;
  
  };

  const [ file, setFile ] = useState ([])


  function handleReciveFIle (data){
    setFile(data);
  }

  return (
    <div className="page">
      <aside>
        <img src="" alt="" />
      </aside>
      <main>
        <div className="main-content">  
          <h2>ADD A CSV FILE</h2>

          <CSVReader onFileLoaded={
            (data) => handleReciveFIle(data)
            } />

          <button 
            className='button' 
            onClick={ () => 
            pasrseCSV(file)}
            >
            <img src={icon} alt="" 
          />
            Send
          </button>
        </div>
        
      </main>
    </div>
  )
}