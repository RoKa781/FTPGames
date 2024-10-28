import { useState, useEffect, useRef } from 'react';
import st from './ProfileMenu.module.css';
import { GiCowled } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../../../app/store/store';
import { logout, selectIsAuth, selectUser } from '../../slice';

const ProfileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target instanceof HTMLElement &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
    closeMenu();
  };

  const handleProfileClick = () => {
    navigate('/profile');
    closeMenu();
  };

  const handleFavoritesClick = () => {
    navigate('/favorite');
    closeMenu();
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate('/');
    closeMenu();
  };

  return (
    <div className={st.profile} ref={menuRef}>
      {user && <span className={st.userName}>{user}</span>}
      <GiCowled size={30} className={st.user} onClick={toggleMenu} />
      {isOpen && (
        <div className={st.dropdownMenu}>
          <ul>
            {isAuth ? (
              <>
                <li onClick={handleProfileClick}>Profile</li>
                <li onClick={handleFavoritesClick}>Favorite</li>
                <li onClick={handleLogoutClick}>Exit</li>
              </>
            ) : (
              <li onClick={handleLoginClick}>Login</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
