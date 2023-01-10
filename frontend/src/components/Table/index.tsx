import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IRamdomUser } from '../../interface/IRamdomUser';

import { Image } from './style';

const UsersTable = ({
    index,
    photo,
    firstname,
    lastName,
    email,
    username,
    age,
}: IRamdomUser) => {
    return (
        <TableBody>
            <TableRow key={index}>
                <TableCell component="th" scope="row">
                    <Image src={photo} />
                </TableCell>
                <TableCell align="right">
                    {firstname}
                    <p>{lastName}</p>
                </TableCell>
                <TableCell align="right">{email}</TableCell>
                <TableCell align="right">{username}</TableCell>
                <TableCell align="right">{age}</TableCell>
            </TableRow>
        </TableBody>
    );
};

export default UsersTable;
