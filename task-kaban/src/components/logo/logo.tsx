import logo from '@/assets/logo/taskjar-light.svg'


interface LogoProps {
    width: '20' | '25' | '35';
    height: '20' | '25' | '35';
}
function Logo({ width, height }: LogoProps) {
    return (

        <>
            <img width={width} height={height} src={logo} alt="taskjar" />
        </>
    )
}

export default Logo