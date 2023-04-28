

export default function Certificates({src, desc}) {
    return (
        <p>
            <div className='w3-card w3-round-large w3-white'>
                <iframe title={desc} src={src} frameBorder="0" width='100%' height={window.navigator.userAgentData.mobile ? '600px' : '850px'} />
            </div>
            <p className='w3-padding w3-text-gray'>{desc}</p>
            <hr style={{ width: '300px' }} className="w3-opacity" />
        </p>
    )
}