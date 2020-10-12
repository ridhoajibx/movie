import React from 'react';
import image from '../../../../assets/profile.jpeg';
import style from './character.module.css';

const Character = () => {
    return (
        <div class="tab-pane fade" id="character" role="tabpanel" aria-labelledby="character-tab">
            <div className="container">
                <div className="row">
                    <div className={ style.cardProfile }>
                        <div >
                            <div className={ style.profileImg } style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={ style.title }>Jumakri Ridho Fauzi</div>
                        </div>
                    </div>

                    <div className={ style.cardProfile }>
                        <div >
                            <div className={ style.profileImg } style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={ style.title }>Jumakri Ridho Fauzi</div>
                        </div>
                    </div>

                    <div className={ style.cardProfile }>
                        <div >
                            <div className={ style.profileImg } style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={ style.title }>Jumakri Ridho Fauzi</div>
                        </div>
                    </div>

                    <div className={ style.cardProfile }>
                        <div >
                            <div className={ style.profileImg } style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={ style.title }>Jumakri Ridho Fauzi</div>
                        </div>
                    </div>

                    <div className={ style.cardProfile }>
                        <div >
                            <div className={ style.profileImg } style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={ style.title }>Jumakri Ridho Fauzi</div>
                        </div>
                    </div>

                    <div className={ style.cardProfile }>
                        <div >
                            <div className={ style.profileImg } style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={ style.title }>Jumakri Ridho Fauzi</div>
                        </div>
                    </div>

                    <div className={ style.cardProfile }>
                        <div >
                            <div className={ style.profileImg } style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={ style.title }>Jumakri Ridho Fauzi</div>
                        </div>
                    </div>

                    <div className={ style.cardProfile }>
                        <div >
                            <div className={ style.profileImg } style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={ style.title }>Jumakri Ridho Fauzi</div>
                        </div>
                    </div>

                    <div className={ style.cardProfile }>
                        <div >
                            <div className={ style.profileImg } style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={ style.title }>Jumakri Ridho Fauzi</div>
                        </div>
                    </div>
                    
                    <div className={ style.cardProfile }>
                        <div >
                            <div className={ style.profileImg } style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={ style.title }>Jumakri Ridho Fauzi</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Character;
