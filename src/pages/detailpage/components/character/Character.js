import React from 'react';
import style from './character.module.css';

const Character = ({characters}) => {

    return (
        <div className="tab-pane fade" id="character" role="tabpanel" aria-labelledby="character-tab">
            <div className="container">
                <div className="row">
                    {
                        !characters.Character ?
                        <div>No Character avaible</div>:
                        characters.Character.map((char, index)=>(
                            <div key={index} className={ style.cardProfile }>
                                <div>
                                    <div className={ style.profileImg } style={{ backgroundImage: `url(${char.photo})` }}></div>
                                    <div className={ style.title }>{char.name}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Character;
