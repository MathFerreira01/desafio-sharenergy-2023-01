import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { paginationProps } from '../../interface/IPagination';

const UsersPagination = ({ pageNumber, setPage }: paginationProps) => {
    return (
        <Stack>
            <Pagination
                onChange={(e, value) => setPage(value)}
                count={pageNumber}
                color="primary"
                hideNextButton={true}
                hidePrevButton={true}
            />
        </Stack>
    );
};

export default UsersPagination;
