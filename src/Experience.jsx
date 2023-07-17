import { Text, Html, ContactShadows, Float, Environment, useGLTF, PresentationControls } from '@react-three/drei'

export default function Experience()
{

    const screenWidth = window.innerWidth;
    const isScreenMoreThan900 = screenWidth > 900;

    return (
        <>
          {isScreenMoreThan900 ? <Macbook /> : <Iphone />}
        </>
      );
    
}

const Macbook = () => {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>

    <Environment preset='city'/>

        <color args={ ['#241a1a'] } attach="background" />

    <PresentationControls 
        global
        rotation={ [0.13, 0.1, 0] }
        polar={ [-0.4, 0.2] }
        azimuth={ [-1, 0.75] }
        config={ { mass: 2, tension: 400 } }
        snap={ { mass: 4, tension: 400 } }
    >
        <Float rotationIntensity={ 0.4 }>
            <rectAreaLight 
                width={2.5}
                height={1.65}
                intensity={65}
                color={ '#c973ff' }
                rotation={ [0.1, Math.PI, 0] }
                position={ [0, 0.55, -1.15] }
            /> 
            <primitive 
                object={ computer.scene } 
                position-y={ -1.2 }
            >
                <Html
                    transform
                    wrapperClass='htmlScreen'
                    distanceFactor={ 1.17 }
                    position={ [ 0, 1.56, -1.4 ] }
                    rotation-x={ -0.256 }
                >
                    <iframe src='https://azariahjhn.netlify.app/'/>
                </Html>
            </primitive>
            <Text 
                font='./bangers-v20-latin-regular.woff'
                fontSize={0.35}
                position={ [2, 0.45, -0.15] }
                rotation-y={-1.55}
                rotation-x={0}
                maxWidth={ 1.5 }
                textAlign='center'
            >
                Azariah John B S
            </Text>
        </Float>
    </PresentationControls> 

    <Html
        position={ [1, -2, 0] }
    >
        <div className="btn-container">
            <a href="https://azariahjhn.netlify.app/"><button className="web-btn">2D Website</button></a>
            {/* <button className='phn-btn'>Use My Iphone</button> */}
        </div>
    </Html>

    <ContactShadows 
        position-y={ -1.4 } 
        opacity={ 0.4 }
        scale={ 5 }
        blur={ 2.4 }
    />

    </>
}

const Iphone = () => {

    const iphone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')

    return <>

        <Environment preset='city'/>
        {/* <OrbitControls makeDefault enableZoom={false} enablePan={false}/> */}

        <color args={ ['#241a1a'] } attach="background" />
        <PresentationControls
            global
            config={{mass: 2, tension: 400}}
            snap={{mass: 2, tension: 400}}
            polar={[-0.4, 0.2]}
            azimuth={[ -1, 0.75 ]}
        >
            <Float rotationIntensity={ 0.4 }>
            <primitive 
                object={ iphone.scene }
                position={[ -0.15, -1.55, 0 ]}
                rotation={ [-0.3, -0.6, -0.18] }
            >
                <Html
                    transform
                    wrapperClass="phoneScreen"
                    distanceFactor={1.2}
                    position={[0.166, 1.33, 0.07]}
                >
                    <iframe src="https://azariahjhn.netlify.app/"/>
                    {/* <div className="notch"></div> */}
                </Html>
            </primitive>
            <Text
                font='./bangers-v20-latin-regular.woff'
                fontSize={0.15}
                position={[0.55, 1.7, -0.7]}
                rotation-y={-0.5}
                maxWidth={0.5}
                textAlign='center'
            >
                Azariah's Portfolio
            </Text>
            </Float>
            
        </PresentationControls>
    </>
}