import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../API/api';
import './style.scss'


const MainNavbar = (props) => {
    const { user: { public_repos } } = props;
    const [repo, setRepo] = useState([])
    useEffect(() => {
        api.getRepositories().then(res => setRepo(res.data))
    }, [])



    return (
        <div data-view-component="true" className="Layout-main">
            <div className="UnderlineNav width-full box-shadow-none js-responsive-underlinenav overflow-md-x-hidden">
                <nav className="UnderlineNav-body width-full p-responsive js-sidenav-container-pjax" aria-label="User profile">
                    <Link to="/" className="UnderlineNav-item js-responsive-underlinenav-item js-selected-navigation-item selected" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;" data-hydro-click-hmac="a8d70a10cd4b8576b180ee22d6b1a272307a8295567f74523142c91aef92f4f0" data-tab-item="overview" data-selected-links="overview /shahzod1120" data-turbo-frame="user-profile-frame" aria-current="page">
                        <span>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-book UnderlineNav-octicon hide-sm">
                                <path fillRule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                            </svg>
                            Overview
                        </span>
                    </Link>
                    <Link to="/repositories" className="UnderlineNav-item js-responsive-underlinenav-item js-selected-navigation-item" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:111142982,&quot;target&quot;:&quot;TAB_REPOSITORIES&quot;,&quot;user_id&quot;:111142982,&quot;originating_url&quot;:&quot;https://github.com/shahzod1120&quot;}}" data-hydro-click-hmac="70ec50016fa93c70ec679dc6ae9f86623b2b91f73c431f16770a68f084b78c0d" data-tab-item="repositories" data-selected-links="repositories /shahzod1120?tab=repositories" data-turbo-frame="user-profile-frame">
                        <span>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo UnderlineNav-octicon hide-sm">
                                <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                            </svg>
                            Repositories
                            <p title="7" data-view-component="true" className="Counter rounded-circle d-flex align-items-end justify-content-center" style={{ width: '20px', height: '20px', backgroundColor: '#EFF1F3' }}>
                                {public_repos}
                            </p>
                        </span>
                    </Link>
                    <Link to="/projects" className="UnderlineNav-item js-responsive-underlinenav-item js-selected-navigation-item" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:111142982,&quot;target&quot;:&quot;TAB_PROJECTS&quot;,&quot;user_id&quot;:111142982,&quot;originating_url&quot;:&quot;https://github.com/shahzod1120&quot;}}" data-hydro-click-hmac="0b040729635eb58867e05ac4fa3f9d16cfee52eaf9eef1aa6e1a82b8396e4cdd" data-tab-item="projects" data-selected-links="projects /shahzod1120?tab=projects" data-turbo-frame="user-profile-frame">
                        <span>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-table UnderlineNav-octicon hide-sm">
                                <path fillRule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"></path>
                            </svg>
                            Projects
                            <p title="0" hidden="hidden" data-view-component="true" className="Counter">0</p>
                        </span>
                    </Link>
                    <Link to="/packages" className="UnderlineNav-item js-responsive-underlinenav-item js-selected-navigation-item" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:111142982,&quot;target&quot;:&quot;TAB_PACKAGES&quot;,&quot;user_id&quot;:111142982,&quot;originating_url&quot;:&quot;https://github.com/shahzod1120&quot;}}" data-hydro-click-hmac="b6bf01bbb4c20e6244e71f26f7df52916ae18769cdfa26c8ab47b30b16f2d39f" data-tab-item="packages" data-selected-links="packages /shahzod1120?tab=packages" data-turbo-frame="user-profile-frame" >
                        <span>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-package UnderlineNav-octicon hide-sm">
                                <path fillRule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>
                            </svg>
                            Packages
                            <span title="0" hidden="hidden" data-view-component="true" className="Counter">0</span>
                        </span>
                    </Link>
                    <Link to="/stars" className="UnderlineNav-item js-responsive-underlinenav-item js-selected-navigation-item" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:111142982,&quot;target&quot;:&quot;TAB_STARS&quot;,&quot;user_id&quot;:111142982,&quot;originating_url&quot;:&quot;https://github.com/shahzod1120&quot;}}" data-hydro-click-hmac="7c1e430bf5dccbd929ce0be9ae8699758cc811de29bc4ed6503d8c0ae00c4853" data-tab-item="stars" data-selected-links="stars /shahzod1120?tab=stars" data-turbo-frame="user-profile-frame" >
                        <span>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star UnderlineNav-octicon hide-sm">
                                <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                            </svg>
                            Stars
                            <span title="0" hidden="hidden" data-view-component="true" className="Counter">0</span>
                        </span>
                    </Link>

                </nav>

                <div className="position-absolute pr-3 pr-md-4 pr-lg-5 right-0 js-responsive-underlinenav-overflow" style={{ visibility: "hidden" }}>
                    <details data-view-component="true" className="details-overlay details-reset position-relative">
                        <summary role="button" data-view-component="true">      <div className="UnderlineNav-item mr-0 border-0">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-kebab-horizontal">
                                <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                            </svg>
                            <span className="sr-only">More</span>
                        </div>
                        </summary>
                        <div data-view-component="true">      <details-menu role="menu" className="dropdown-menu dropdown-menu-sw">
                            <ul>
                                <li data-menu-item="overview" hidden="">
                                    <a role="menuitem" className="js-selected-navigation-item selected dropdown-item" aria-current="page" data-selected-links=" /shahzod1120" href="/shahzod1120" data-turbo-frame="user-profile-frame">Overview</a>
                                </li>
                                <li data-menu-item="repositories" hidden="">
                                    <a role="menuitem" className="js-selected-navigation-item dropdown-item" data-selected-links=" /shahzod1120?tab=repositories" href="/shahzod1120?tab=repositories" data-turbo-frame="user-profile-frame">Repositories</a>
                                </li>
                                <li data-menu-item="projects" hidden="">
                                    <a role="menuitem" className="js-selected-navigation-item dropdown-item" data-selected-links=" /shahzod1120?tab=projects" href="/shahzod1120?tab=projects" data-turbo-frame="user-profile-frame">Projects</a>
                                </li>
                                <li data-menu-item="packages" hidden="">
                                    <a role="menuitem" className="js-selected-navigation-item dropdown-item" data-selected-links=" /shahzod1120?tab=packages" href="/shahzod1120?tab=packages" data-turbo-frame="user-profile-frame">Packages</a>
                                </li>
                                <li data-menu-item="stars" hidden="">
                                    <a role="menuitem" className="js-selected-navigation-item dropdown-item" data-selected-links=" /shahzod1120?tab=stars" href="/shahzod1120?tab=stars" data-turbo-frame="user-profile-frame">Stars</a>
                                </li>
                            </ul>
                        </details-menu>
                        </div>
                    </details></div>

            </div>
        </div>
    )
}

export default MainNavbar;
