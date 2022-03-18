import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import { CheckCircle } from '@material-ui/icons';

function SnackbarNoti({ classes, ...propsSnackbar }) {
    return (
        <div style={{ width: '100%' }}>
            <Snackbar {...propsSnackbar}>
                <SnackbarContent
                    style={{
                        backgroundColor: '#084376',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    message={
                        <span
                            id="client-snackbar"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: 45,
                            }}
                        >
                            Đã thêm thành công! <CheckCircle />
                        </span>
                    }
                />
            </Snackbar>
        </div>
    );
}

export default SnackbarNoti;
