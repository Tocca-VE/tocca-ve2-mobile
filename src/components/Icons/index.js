import React from 'react';
import is from 'classnames';
import { FiHome, FiCalendar, FiX, FiEyeOff, FiEye, FiLock, FiCheck, FiMenu, FiUser } from 'react-icons/fi';
import { RiNotification2Line } from 'react-icons/ri';
import { TiWarningOutline } from 'react-icons/ti';
import Notification from '../../assets/icons/notification.svg';
import Chaticon from '../../assets/icons/chat-new.svg';
import { FaLinkedinIn, FaTwitter, FaUserCircle } from 'react-icons/fa';
export * from './styles';
export const COLOR = 'var(--theme-color, currentColor)';

export const BellIcon = (/* ie */) => <RiNotification2Line />;

export const CalendarIcon = ({ className, ...ie }) => (
    <FiCalendar className={is('stroke', className)} {...ie} />
);

export const ChatIcon = () => <img src={Chaticon} width="20" height="20" alt="notification" />;

export const CheckIcon = ({ className, ...ie }) => (
    <FiCheck className={is('stroke', className)} {...ie} />
);

export const CloseIcon = ({ className, ...ie }) => (
    <FiX className={is('stroke', className)} {...ie} />
);

export const DeleteIcon = ({ ...ie }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...ie}>
        <g fillRule="evenodd">
            <path
                d="M9.333.667c1.065 0 1.936.832 1.997 1.882l.003.118v.666H14c.368 0 .667.299.667.667 0 .342-.258.624-.59.662L14 4.667h-.667v8.666c0 1.065-.832 1.936-1.882 1.997l-.118.003H4.667c-1.065 0-1.936-.832-1.997-1.882l-.003-.118V4.667H2c-.368 0-.667-.299-.667-.667 0-.342.258-.624.59-.662L2 3.333h2.666v-.666C4.667 1.602 5.5.73 6.55.67l.118-.003h2.666zm2.666 4H4L4 13.333c0 .342.257.624.589.663l.078.004h6.666c.342 0 .624-.257.663-.589l.004-.078V4.667zm-5.332 2c.342 0 .623.257.662.589l.004.077v4c0 .369-.298.667-.666.667-.342 0-.624-.257-.663-.589L6 11.333v-4c0-.368.298-.666.667-.666zm2.666 0c.342 0 .624.257.663.589l.004.077v4c0 .369-.298.667-.667.667-.342 0-.623-.257-.662-.589l-.004-.078v-4c0-.368.298-.666.666-.666zm0-4.667H6.667c-.342 0-.624.257-.663.589L6 2.667v.666h4v-.666c0-.342-.257-.624-.589-.663L9.333 2z"
                transform="translate(-786 -417) translate(680 83) translate(90 222) translate(16 112)"
            />
        </g>
    </svg>
);

export const EditIcon = ({ ...ie }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...ie}>
        <g fillRule="evenodd">
            <path
                d="M2.667 10.943v2.39h2.39l8-8-2.39-2.39-8 8zm8.471-9.414l3.333 3.333c.26.26.26.682 0 .943L5.805 14.47c-.125.125-.295.196-.472.196H2c-.368 0-.667-.299-.667-.667v-3.333c0-.177.07-.347.196-.472l8.666-8.666c.26-.26.683-.26.943 0z"
                transform="translate(-786 -417) translate(680 83) translate(90 222) translate(16 112)"
            />
        </g>
    </svg>
);

export const FacebookIcon = ({ ...ie }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...ie}>
        <g fillRule="evenodd">
            <path
                d="M8.833 5.917V4.25c0-.46.374-.833.834-.833h.833V1.333H8.833c-1.38 0-2.5 1.12-2.5 2.5v2.084H4.667V8h1.666v6.667h2.5V8H10.5l.833-2.083h-2.5z"
                transform="translate(-1010 -368) translate(680 83) translate(90 222) translate(240 63)"
            />
        </g>
    </svg>
);

export const FailureIcon = ({ className }) => <TiWarningOutline className={className} />;

export const GoogleIcon = ({ ...ie }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...ie}>
        <g fillRule="evenodd">
            <path
                d="M8.136 7.048v2.285h3.858c-.155.981-1.166 2.877-3.858 2.877-2.323 0-4.218-1.886-4.218-4.21s1.895-4.21 4.218-4.21c1.322 0 2.206.553 2.711 1.029l1.847-1.743C11.508 1.99 9.973 1.333 8.136 1.333c-3.76 0-6.803 2.981-6.803 6.667s3.042 6.667 6.803 6.667c3.926 0 6.53-2.705 6.53-6.515 0-.438-.048-.771-.106-1.104H8.136z"
                transform="translate(-1010 -400) translate(1010 400)"
            />
        </g>
    </svg>
);

export const HomeIcon = ({ className, ...ie }) => (
    <FiHome className={is('stroke', className)} {...ie} />
);

export const LinkedinIcon = ({ className, ...ie }) => (
    <FaLinkedinIn className={is('stroke', className)} {...ie} />
);

export const LockIcon = ({ className, ...ie }) => (
    <FiLock className={is('stroke', className)} {...ie} />
);

export const MenuIcon = ({ className, ...ie }) => (
    <FiMenu className={is('stroke', className)} {...ie} />
);

export const NotificationIcon = () => (
    // <FaRegBell className={is('fill', className)} {...ie} />
    <img src={Notification} width="20" height="20" alt="notification" className="header-notify" />
);

export const PictureIcon = ({ ...ie }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...ie}>
        <g fillRule="evenodd">
            <path
                d="M9.297 2.5c.413 0 .796.219 1.006.575l.601 1.023c.03.05.085.082.144.082h2.23c.645 0 1.167.522 1.167 1.167v7.166c0 .644-.522 1.166-1.166 1.166H2.696c-.644 0-1.167-.522-1.167-1.166V5.347c0-.645.523-1.167 1.167-1.167H4.44c.06 0 .115-.032.145-.085l.566-1.002c.207-.366.595-.593 1.016-.593zm0 1h-3.13c-.06 0-.116.032-.145.085l-.566 1.002c-.207.366-.595.593-1.016.593H2.696c-.092 0-.167.075-.167.167v7.166c0 .092.075.166.167.166H13.28c.092 0 .166-.074.166-.166V5.347c0-.092-.074-.167-.166-.167h-2.231c-.413 0-.796-.219-1.006-.575l-.601-1.023c-.03-.05-.085-.082-.144-.082zM8 6c1.473 0 2.667 1.194 2.667 2.667 0 1.472-1.194 2.666-2.667 2.666-1.473 0-2.667-1.194-2.667-2.666C5.333 7.194 6.527 6 8 6zm0 1c-.92 0-1.667.746-1.667 1.667 0 .92.747 1.666 1.667 1.666s1.667-.746 1.667-1.666C9.667 7.747 8.92 7 8 7z"
                transform="translate(-786 -385) translate(680 83) translate(90 222) translate(16 80)"
            />
        </g>
    </svg>
);

export const PreviewIcon = ({ className, ...ie }) => (
    <FiEye className={is('stroke', className)} {...ie} />
);

export const PreviewingIcon = ({ className, ...ie }) => (
    <FiEyeOff className={is('stroke', className)} {...ie} />
);

export const ProfileIcon = ({ ...ie }) => <FaUserCircle style={{ fill: COLOR }} {...ie} />;

export const SocialIcon = ({ ...ie }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...ie}>
        <g fillRule="evenodd">
            <path
                d="M9.413.336c-2.27.071-3.776 1.673-3.776 4.13v.748h-1.97v4.37h1.97v6.083h4.357V9.584h1.849l.543-4.37H9.993l.003-.625v-.038l.082-.003 2.255-.002V.54l-.981-.118-.16-.017-.36-.029-.4-.022c-.277-.013-.57-.02-.86-.02l-.16.002zm.16.997l.33.004.31.008.287.013.257.016.222.016.253.024.101.013v2.12h-1.208c-.906 0-1.114.428-1.13 1.066l-.001.088v1.513h2.26l-.295 2.37H8.994v6.083H6.637V8.585h-1.97v-2.37h1.97V4.465c0-2.028 1.193-3.133 2.935-3.133z"
                transform="translate(-786 -353) translate(680 83) translate(90 222) translate(16 48)"
            />
        </g>
    </svg>
);

export const SystemIcon = ({ ...ie }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...ie}>
        <g fillRule="evenodd">
            <path
                d="M2 10.667v-6c0-.737.597-1.334 1.333-1.334h9.334c.736 0 1.333.597 1.333 1.334v6c0 .736-.597 1.333-1.333 1.333h2c.368 0 .666.298.666.667 0 .368-.298.666-.666.666H1.333c-.368 0-.666-.298-.666-.666 0-.369.298-.667.666-.667h2C2.597 12 2 11.403 2 10.667zm10.667-6H3.333v6h9.334v-6z"
                transform="translate(-786 -321) translate(680 83) translate(90 222) translate(16 16)"
            />
        </g>
    </svg>
);

export const SwappedCardsIcon = ({ ...ie }) => (
    <svg viewBox="0 0 32.037 32.037" width="1em" height="1em" style={{ fill: COLOR }} {...ie}>
        <g>
            <path d="M8.781,18.508c0.082,0.662,0.697,1.606,1.122,1.606c0.052,0,0.1-0.015,0.142-0.041c0.309,0.565,0.698,1.071,1.127,1.463 h3.213c0.389-0.397,0.724-0.915,0.967-1.491c0.055,0.04,0.114,0.068,0.18,0.068c0.425,0,0.93-0.945,0.935-1.606 c0.005-0.677-0.053-1.237-0.499-1.237c-0.053,0-0.109,0.01-0.166,0.024c-0.041-1.952-0.549-4.572-3.54-4.572 c-2.789,0-3.191,2.615-3.004,4.565c-0.042-0.008-0.084-0.018-0.122-0.018C8.69,17.271,8.698,17.831,8.781,18.508z" />
            <path d="M25.637,16.301l0.195-1.249c0.07-0.447-0.211-0.814-0.629-0.814h-9.04c0.257,0.624,0.436,1.375,0.503,2.279 c0.185,0.121,0.321,0.314,0.431,0.547h7.699C25.195,17.062,25.572,16.725,25.637,16.301z" />
            <path d="M24.14,21.612c0.368,0,0.713-0.29,0.77-0.651l0.166-1.064c0.059-0.381-0.204-0.692-0.588-0.692H17.23 c-0.209,0.739-0.695,1.492-1.348,1.69c-0.019,0.035-0.042,0.065-0.061,0.1l0.003,0.619L24.14,21.612L24.14,21.612z" />
            <path d="M3.999,21.225L2.517,11.34c0-1.216,0.989-2.206,2.206-2.206h22.501c1.216,0,2.205,0.989,2.205,2.206l-1.317,9.772h1.973 l1.318-9.772c0-2.308-1.871-4.179-4.179-4.179H4.723c-2.308,0-4.179,1.871-4.179,4.179l1.482,9.885H3.999z" />
            <path d="M1.69,22.52c-0.409,0-0.797,0.179-1.065,0.487c-0.268,0.31-0.387,0.72-0.328,1.124l1.151,7.906h29.14l1.151-7.907 c0.059-0.403-0.062-0.815-0.328-1.124s-0.656-0.486-1.065-0.486H1.69L1.69,22.52z" />
            <path d="M25.843,5.585L26.2,4.042c0.036-0.156-0.001-0.321-0.101-0.446c-0.101-0.126-0.251-0.199-0.412-0.199H5.469 c-0.165,0-0.32,0.076-0.422,0.205c-0.102,0.13-0.138,0.299-0.098,0.459l0.377,1.523L25.843,5.585L25.843,5.585z" />
            <path d="M23.818,2.187l0.29-1.565c0.028-0.154-0.014-0.312-0.113-0.432C23.895,0.07,23.747,0,23.589,0H7.551 C7.394,0,7.245,0.071,7.145,0.192c-0.1,0.122-0.14,0.282-0.109,0.436l0.309,1.559H23.818z" />
        </g>
    </svg>
);

export const TwitterIcon = ({ className, ...ie }) => (
    <FaTwitter className={is('stroke', className)} {...ie} />
);

export const TwitterLogo = ({ ...ie }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...ie}>
        <g fillRule="evenodd">
            <path
                d="M14.667 3.95c-.496.217-1.024.36-1.575.43.566-.337.999-.87 1.202-1.51-.528.315-1.112.538-1.733.662-.502-.534-1.217-.865-1.997-.865-1.513 0-2.732 1.228-2.732 2.734 0 .216.019.425.064.623-2.273-.11-4.284-1.2-5.634-2.859-.236.41-.375.878-.375 1.382 0 .946.488 1.785 1.215 2.271-.44-.008-.87-.135-1.235-.336v.03c0 1.328.947 2.431 2.19 2.686-.223.06-.465.09-.717.09-.175 0-.352-.01-.518-.047.355 1.082 1.36 1.878 2.555 1.904-.93.728-2.111 1.166-3.39 1.166-.224 0-.439-.01-.654-.038 1.211.781 2.646 1.227 4.194 1.227 5.03 0 7.78-4.167 7.78-7.778 0-.121-.005-.238-.01-.354.542-.385.998-.865 1.37-1.419z"
                transform="translate(-1010 -432) translate(680 83) translate(90 222) translate(240 127)"
            />
        </g>
    </svg>
);

export const UserIcon = ({ className, ...ie }) => (
    <FiUser className={is('stroke', className)} {...ie} />
);
