import React from 'react'
import veg from "../../assets/veg.jpg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import refri from "../../assets/Group 508@2x.jpg"
import "./styles.css"
import { useNavigate } from 'react-router-dom';
function Dishcomp({dish,i}) {
  const navigate=useNavigate();
  return (
    <div className="dish-element" key={i}>
              <div className="dish-name">
                <div className="name-rating">
                  <div className="name">{dish.name}</div>
                  <img
                    src={veg}
                    alt=""
                    className='veg-img'
                  />
                  <div className="rating">
                    {dish.rating}
                    <StarRoundedIcon fontSize="small" />
                  </div>
                </div>
                <div className='button-recipe'>
                  <div className='eqip'>
                    {
                        dish.equipments.map((equip, index)=>(
                            <div className='refri-img'>
                                <img src={refri} alt="" className='ref'/>
                                <p>{equip}</p>
                            </div>
                        ))
                    }
                  </div>
                  <div className='ingri-center'>
                    <p>Ingredients</p>
                    <p onClick={()=>navigate('/recipe')}>View List &gt;</p>
                  </div>
                </div>
                <p className='dish-desc'>{dish.description}</p>
              </div>
              <div style={{
                position: 'relative',
                display: 'flex',
                justifyContent:"flex-end"
              }}>
                <div className="image-box">
                  <img src={dish.image} alt="" className="dish-image" />
                </div>
                <button className="add-button">Add</button>
              </div>
            </div>
  )
}

export default Dishcomp