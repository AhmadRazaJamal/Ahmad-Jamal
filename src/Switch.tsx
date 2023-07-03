import SwipeIcon from '@mui/icons-material/Swipe';

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
            <SwipeIcon className={'interactive-icon'} style={{ color: 'white', marginLeft: 10 }} />
        </>
    );
}