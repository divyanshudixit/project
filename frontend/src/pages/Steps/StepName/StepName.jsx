// // import React from 'react';

// // const StepName = ({ onNext }) => {
// //     return (
// //         <>
// //             <div>Name component</div>
// //             <button onClick={onNext}>Next</button>
// //         </>
// //     );
// // };

// // export default StepName;



// import React, { useState } from 'react';
// import Card from '../../../components/shared/Card/Card';
// import Button from '../../../components/shared/Button/Button';
// import TextInput from '../../../components/shared/TextInput/TextInput';
// import { useDispatch,useSelector } from 'react-redux';
// import { setName } from '../../../store/activateSlice';
// import styles from  './StepName.module.css';

// const StepName = ({ onNext }) => {
//     const {name}=useSelector((state)=>state.activate);
//     const dispatch=useDispatch();

//     const [fullname,setFullName]=useState(name);
//     function nextStep(){
//         if(!fullname)
//         {
//             return;
//         }
//         dispatch(setName(fullname));
//         onNext();

//     }
//     return (
//         <>
//            <Card
//                     title="what's your full name?"
//                     icon="goggle-emoji"
//                 >
//                     <TextInput
//                         value={fullname}
//                         onChange={(e) => setFullName(e.target.value)}
//                     />
                  
//                     <p className={styles.bottomParagraph}>
//                        People use real names at coderhouse :) !
//                     </p>
//                     <div className={styles.actionButtonWrap}>
//                         <Button onClick={nextStep} text="Next" />
//                     </div>
//                 </Card>
//         </>
//     );
// };

// export default StepName;
import React, { useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import TextInput from '../../../components/shared/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../../store/activateSlice';
import styles from './StepName.module.css';
const StepName = ({ onNext }) => {
    const { name } = useSelector((state) => state.activate);
    const dispatch = useDispatch();
    const [fullname, setFullname] = useState(name);

    function nextStep() {
        if (!fullname) {
            return;
        }
        dispatch(setName(fullname));
        onNext();
    }
    return (
        <>
            <Card title="What’s your full name?" icon="goggle-emoji">
                <TextInput
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />
                <p className={styles.paragraph}>
                    People use real names at codershouse :) !
                </p>
                <div>
                    <Button onClick={nextStep} text="Next" />
                </div>
            </Card>
        </>
    );
};

export default StepName;