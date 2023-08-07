import ViewInArIcon from '@mui/icons-material/ViewInAr';
export const Switch = ({ isOn, setInteractive }: any) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={() => setInteractive(!isOn)}
                className='react-switch-checkbox'
                id={'react-switch-new'}
                type='checkbox'
            />
            <label
                className='react-switch-label'
                htmlFor={'react-switch-new'}
            >
                <span className={'react-switch-button'} />
            </label>
            <ViewInArIcon className={'interactive-icon'} style={{ color: 'white', marginLeft: 10 }} />
        </>
    );
}