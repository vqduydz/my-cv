import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { Box, styled, Typography } from '@mui/material';
import { saveAs } from 'file-saver';
import myCv from '../../../assets/pdf/12345566.pdf';

import { MyButton } from '_/components/common';
import './Home.scss';
import { routes } from '_/routes';

const Home = () => {
    const Container = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('0')]: {
            width: '100%',
        },
        [theme.breakpoints.up('992')]: {
            width: '970px',
        },
        [theme.breakpoints.up('1200')]: {
            width: '1170px',
        },
    }));

    const Wrapper = ({ children }) => (
        <Box
            sx={{
                mb: '10px',
            }}
        >
            {children}
        </Box>
    );
    const Inner = ({ children, sx }) => (
        <Box
            sx={{
                padding: { 0: '0 10px', 640: '0 20px' },
                width: '100%',
                textAlign: 'justify',
                display: 'flex',
                flexDirection: 'column',
                ...sx,
            }}
        >
            {children}
        </Box>
    );

    const downloadPDF = () => {
        const pdfName = 'Vu-Quoc-Duy-CV.pdf';
        saveAs(myCv, pdfName);
    };

    return (
        <Box
            sx={{
                background: 'linear-gradient(54deg, #8bfff4, #9164ff)',
                minWidth: '320px',
                padding: { 0: '2px', 768: '10px' },
                minHeight: '100vh',
                '& p': {
                    margin: ' 0 0 5px',
                },
            }}
        >
            <Container
                sx={{
                    borderRadius: { 0: 0, 768: '10px' },
                    background: 'rgb(255 255 255 / 50%)',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    padding: '10px',
                    paddingRight: { 0: 0, 768: '15px' },
                    paddingLeft: { 0: 0, 768: '15px' },
                }}
            >
                <Box
                    sx={{
                        padding: '10px',
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        gap: '20px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography sx={{ fontSize: '3.2rem', fontWeight: 700 }}>Vũ Quốc Duy</Typography>
                        <Typography sx={{ color: '#777', fontWeight: 300 }}>(Full-Stack Developer)</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        justifyContent: 'space-evenly',
                        gridTemplateColumns: { 0: 'auto auto auto auto', 640: 'auto auto auto auto' },
                        mb: '15px',
                        gap: { 800: '10px' },
                        '& div': {
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2px',
                        },
                    }}
                >
                    <Box>
                        <CallIcon fontSize="small" /> 0384026028
                    </Box>
                    <Box>
                        <MailIcon fontSize="small" /> vqduydz@gmail.com
                    </Box>
                    <Box>
                        <GitHubIcon fontSize="small" /> https://github.com/vqduydz
                    </Box>
                    <Box>
                        <LocationOnIcon fontSize="small" /> Tp. Thủ Đức - Tp.Hồ Chí Minh
                    </Box>
                </Box>
                <Wrapper>
                    <Typography
                        sx={{
                            fontSize: '2.2rem',
                            fontWeight: 700,
                            borderBottom: '1px solid #777',
                        }}
                    >
                        Học vấn
                    </Typography>
                    <Inner>
                        <Box sx={{ mt: '10px' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { 0: 'column', 560: 'row' },
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ fontSize: '1.6rem', fontWeight: 700 }}>
                                    Cao đẳng nghề Việt Nam - Sigapore
                                </Typography>
                                <Typography sx={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                                    (10/2009 - 10/2012)
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: '1.4rem' }}>
                                Khoa Điện-Điện tử chuyên ngành Điện tử công nghiệp
                            </Typography>
                        </Box>
                    </Inner>
                </Wrapper>
                <Wrapper>
                    <Typography
                        sx={{
                            fontSize: '2.2rem',
                            fontWeight: 700,
                            borderBottom: '1px solid #777',
                        }}
                    >
                        Kinh nghiệm làm việc
                    </Typography>
                    <Inner
                        sx={{
                            '&>div': {
                                '& +div': { borderTop: '1px solid #a8a8a8', paddingTop: '10px' },
                            },
                        }}
                    >
                        <Box sx={{ mt: '10px' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { 0: 'column', 560: 'row' },
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ fontSize: '1.6rem', fontWeight: 700 }}>
                                    Dựng website phòng khám nha khoa - DBE Dentistry
                                </Typography>
                                <Typography sx={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                                    (12/2022 - hiện nay)
                                </Typography>
                            </Box>
                            <Typography>Project cá nhân tự làm</Typography>
                            <Typography>
                                <strong>Mô tả :</strong> CRUD user, quản lý nhân sự, quản lý content, đặt lịch khám nha
                                khoa. Xử lý real-time 1 số chức năng.
                            </Typography>
                            <Typography>
                                <strong>Công nghệ sử dụng :</strong> html, css/scss, javascript, reactjs, Material UI,
                                redux toolkit, redux persist, nodejs(express), socket.io, JWT, sequelize, MySQL
                                (xampp)...
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <strong> Link demo : </strong>
                                <MyButton fontWeight={400} text>
                                    abcd1234
                                </MyButton>
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <strong>Link Github : </strong>
                                <MyButton fontWeight={400} text>
                                    abcd1234
                                </MyButton>
                            </Typography>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { 0: 'column', 560: 'row' },
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography sx={{ fontSize: '1.6rem', fontWeight: 700 }}>
                                    Dựng mạng xã hội - DBE Confide
                                </Typography>
                                <Typography sx={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                                    (05/2022 - 10/2022)
                                </Typography>
                            </Box>
                            <Typography>Project cá nhân tự làm</Typography>
                            <Typography>
                                <strong>Mô tả :</strong> Đăng ký, đăng nhập, quên mật khẩu, đặt lại mật khẩu. CRUD bài
                                post. Bình luận bài post. Kết bạn, chat riêng, chat nhóm. Thông báo trên toàn hệ thống.
                                Xử lý real-time tất cả chức năng.
                            </Typography>
                            <Typography>
                                <strong>Công nghệ sử dụng :</strong> html, css/scss, javascript, reactjs, Material UI,
                                redux toolkit, redux persist, nodejs(express), socket.io, JWT, sequelize, MySQL
                                (xampp)...
                            </Typography>
                            <Typography>
                                <strong> Link demo : </strong>abcd1234
                            </Typography>
                            <Typography>
                                <strong>Link Github : </strong>abcd1234
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '1.6rem', fontWeight: 700 }}>Một số dự án khác:</Typography>{' '}
                            <Typography>
                                <strong> Dự án cá nhân tự làm : </strong> https://github.com/vqduydz
                            </Typography>
                            <Typography>
                                <strong>Dự án làm theo các khóa học online : </strong> https://github.com/duyvq-learn
                            </Typography>
                        </Box>
                    </Inner>
                </Wrapper>
                <Wrapper>
                    <Typography
                        sx={{
                            fontSize: '2.2rem',
                            fontWeight: 700,
                            borderBottom: '1px solid #777',
                        }}
                    >
                        Kỹ năng
                    </Typography>
                    <Inner
                        sx={{
                            mt: '10px',
                            display: 'flex',
                            flexDirection: { 0: 'column', 560: 'row' },
                            '&>div': {
                                flex: 1,
                            },
                        }}
                    >
                        <Box>
                            <Typography sx={{ fontSize: '1.6rem', fontWeight: 700 }}>Front-end</Typography>
                            <Box sx={{ padding: '0 10px' }}>
                                <li>HTML, CSS(SCSS), Javascript</li>
                                <li>Material UI, ReactJs</li>
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '1.6rem', fontWeight: 700 }}>Back-end</Typography>
                            <Box sx={{ padding: '0 10px' }}>
                                <li>Javascript</li>
                                <li>NodeJs(Express)</li>
                            </Box>
                        </Box>
                    </Inner>
                </Wrapper>
                <Wrapper>
                    <Typography
                        sx={{
                            fontSize: '2.2rem',
                            fontWeight: 700,
                            borderBottom: '1px solid #777',
                        }}
                    >
                        Một số thông tin khác
                    </Typography>
                    <Inner
                        sx={{
                            mt: '10px',
                            display: 'flex',
                            flexDirection: { 0: 'column', 560: 'row' },
                            justifyContent: 'center',
                            '&>div': {
                                flex: 1,
                            },
                        }}
                    >
                        <Box>
                            <MyButton
                                to={routes.detail}
                                text
                                effect
                                color={{ mainColor: 'blue', subColor: 'red' }}
                                sx={{ minWidth: '180px' }}
                                padding="2.5px 5px"
                                fontSize={1.5}
                            >
                                Thông tin chi tiết
                            </MyButton>
                        </Box>
                        <Box>
                            <MyButton
                                onClick={downloadPDF}
                                sx={{ minWidth: '100px' }}
                                padding="2.5px 5px"
                                fontSize={1.5}
                                effect
                                color={{ mainColor: 'blue', subColor: '#fff', bgColor: 'transparent' }}
                            >
                                Tải CV
                            </MyButton>
                        </Box>
                    </Inner>
                </Wrapper>
            </Container>
        </Box>
    );
};

export default Home;
