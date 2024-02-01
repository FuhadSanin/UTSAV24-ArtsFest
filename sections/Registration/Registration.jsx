import './Registration.css'

function Registration()
{
    return(
        <>
        <div className='Registration-main-container'>
            <div className='Registration-glass-container'>
                <div className='Registration-leftside'>
                    <h1 className='Registration-Eventname'>ACTOR OF CEC</h1>
                    <p className='Registration-EventDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis enim sed nulla laoreet tristique. Fusce quis eleifend justo. Sed in sapien augue. Nunc malesuada accumsan faucibus. Curabitur nec tortor diam. Donec congue ante ac dapibus sollicitudin. Nam vulputate, magna eget interdum sagittis, odio leo placerat mi, sit amet mattis elit velit pellentesque est. Mauris vel sodales arcu. Etiam ultrices est sed velit ultricies, et dignissim.</p>
                    <a href="" className='Registration-EventLink'>REGISTER NOW</a>
                </div>
                <div className='Registration-RightSide'>
                    <img src="../../images/Mask group.png" alt="" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Registration;