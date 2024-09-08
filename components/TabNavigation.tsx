'use client';
import '../styles/components/TabNavigation.scss';
import { useRouter, usePathname } from 'next/navigation';

const tabs = [
  {
    label: 'Tab1',
    route: '/dashboard',
  },
  {
    label: 'Tab2',
    route: '/lookup',
  },
  {
    label: 'Tab3',
    route: '/portfolio',
  },
  {
    label: 'Tab4',
    route: '/notes',
  },
];

export default function TabNavigation() {
  const router = useRouter();
  const pathName = usePathname();

  const handleTabClick = (route: string) => {
    router.push(route);
  };

  const renderIcon = (route: string) => {
    const isActive = route === pathName;
    const strokeColor = isActive ? '#0EFFDF' : '#007566';

    switch (route) {
      case '/dashboard':
        return (
          <svg
            className="tab-button__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              d="M27.5 14.25V11.75C27.5 5.5 25 3 18.75 3H11.25C5 3 2.5 5.5 2.5 11.75V19.25C2.5 25.5 5 28 11.25 28H12.5"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.5376 11.125H27.5001"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.5376 19.875H15.0001"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6377 27.9875V3.01251"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.3877 15.4875V3.01251"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.4125 18.8376L18.2251 24.025C18.0251 24.225 17.8375 24.6126 17.7875 24.8876L17.5 26.875C17.4 27.5875 17.9001 28.1 18.6126 27.9875L20.6 27.7001C20.875 27.6626 21.2625 27.4626 21.4625 27.2626L26.65 22.0751C27.5375 21.1876 27.9625 20.1376 26.65 18.8251C25.35 17.5251 24.3125 17.9376 23.4125 18.8376Z"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.6753 19.575C23.1128 21.15 24.3503 22.375 25.9253 22.825"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case '/lookup':
        return (
          <svg
            className="tab-button__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              d="M18.7876 13.9625L25.8626 9.225C26.5751 8.75 26.7626 7.775 26.2876 7.075L24.0126 3.68747C23.5376 2.97497 22.5626 2.78748 21.8626 3.26248L14.7876 7.99999L18.7876 13.9625Z"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.2177 8.59903L9.24561 12.5989L12.4455 17.3766L18.4176 13.3767L15.2177 8.59903Z"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.28768 20.375L12.2252 17.075L9.42517 12.9L4.48767 16.2C3.91267 16.5875 3.76267 17.3625 4.15017 17.9375L5.56267 20.0375C5.93767 20.6 6.71268 20.75 7.28768 20.375Z"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.0627 15.75L9.4502 28"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 15.75L20.55 28"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case '/portfolio':
        return (
          <svg
            className="tab-button__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              d="M15 28H21.25C25 28 27.5 25.5 27.5 21.75V15.5C27.5 12.125 25.375 9.625 22.25 9.25C22 9.25 21.625 9.25 21.25 9.25H8.75C8.375 9.25 8.125 9.24997 7.75 9.37497C4.5 9.74997 2.5 12.125 2.5 15.5C2.5 15.875 2.5 16.375 2.5 16.75"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.25 9.25C22 9.25 21.625 9.25 21.25 9.25H8.75C8.375 9.25 8.125 9.24997 7.75 9.37497C7.875 8.99997 8.12501 8.74998 8.50001 8.37498L12.5 4.25C14.25 2.5 17 2.5 18.75 4.25L21 6.49998C21.75 7.24998 22.125 8.25 22.25 9.25Z"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.5 16.125H23.75C22.375 16.125 21.25 17.25 21.25 18.625C21.25 20 22.375 21.125 23.75 21.125H27.5"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.25196 27.25C9.46446 27.25 11.252 25.4625 11.252 23.25C11.252 21.0375 9.46446 19.25 7.25196 19.25C5.03946 19.25 3.25195 21.0375 3.25195 23.25C3.25195 25.4625 5.03946 27.25 7.25196 27.25Z"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.5 28L3.75 26.75"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );

      case '/notes':
        return (
          <svg
            className="tab-button__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
          >
            <path
              d="M25 10.8125V23C25 26.75 22.7625 28 20 28H10C7.2375 28 5 26.75 5 23V10.8125C5 6.75 7.2375 5.8125 10 5.8125C10 6.5875 10.3125 7.2875 10.825 7.8C11.3375 8.3125 12.0375 8.625 12.8125 8.625H17.1875C18.7375 8.625 20 7.3625 20 5.8125C22.7625 5.8125 25 6.75 25 10.8125Z"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 5.8125C20 7.3625 18.7375 8.625 17.1875 8.625H12.8125C12.0375 8.625 11.3375 8.3125 10.825 7.8C10.3125 7.2875 10 6.5875 10 5.8125C10 4.2625 11.2625 3 12.8125 3H17.1875C17.9625 3 18.6625 3.3125 19.175 3.825C19.6875 4.3375 20 5.0375 20 5.8125Z"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 16.75H15"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 21.75H20"
              stroke={strokeColor}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${pathName === tab.route ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.route)}
          >
            {renderIcon(tab.route)}
          </button>
        ))}
      </div>
    </div>
  );
}
