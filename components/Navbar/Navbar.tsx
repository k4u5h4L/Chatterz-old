import React from "react";
import Logo from "../Logo/Logo";

export default function Navbar() {
    return (
        <>
            <Logo />
            <div className="flex-lg-column my-auto">
                <ul
                    className="nav nav-pills side-menu-nav justify-content-center"
                    role="tablist"
                >
                    <li
                        className="nav-item"
                        data-toggle="tooltip"
                        data-trigger="hover"
                        data-placement="top"
                        title="Profile"
                    >
                        <a
                            className="nav-link"
                            id="pills-user-tab"
                            data-toggle="pill"
                            href="#pills-user"
                            role="tab"
                        >
                            <i className="ri-user-2-line"></i>
                        </a>
                    </li>
                    <li
                        className="nav-item"
                        data-toggle="tooltip"
                        data-trigger="hover"
                        data-placement="top"
                        title="Chats"
                    >
                        <a
                            className="nav-link active"
                            id="pills-chat-tab"
                            data-toggle="pill"
                            href="#pills-chat"
                            role="tab"
                        >
                            <i className="ri-message-3-line"></i>
                        </a>
                    </li>
                    <li
                        className="nav-item"
                        data-toggle="tooltip"
                        data-trigger="hover"
                        data-placement="top"
                        title="Groups"
                    >
                        <a
                            className="nav-link"
                            id="pills-groups-tab"
                            data-toggle="pill"
                            href="#pills-groups"
                            role="tab"
                        >
                            <i className="ri-group-line"></i>
                        </a>
                    </li>
                    <li
                        className="nav-item"
                        data-toggle="tooltip"
                        data-trigger="hover"
                        data-placement="top"
                        title="Contacts"
                    >
                        <a
                            className="nav-link"
                            id="pills-contacts-tab"
                            data-toggle="pill"
                            href="#pills-contacts"
                            role="tab"
                        >
                            <i className="ri-contacts-line"></i>
                        </a>
                    </li>
                    <li
                        className="nav-item"
                        data-toggle="tooltip"
                        data-trigger="hover"
                        data-placement="top"
                        title="Settings"
                    >
                        <a
                            className="nav-link"
                            id="pills-setting-tab"
                            data-toggle="pill"
                            href="#pills-setting"
                            role="tab"
                        >
                            <i className="ri-settings-2-line"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <img
                                src="assets/images/users/avatar-1.jpg"
                                alt=""
                                className="profile-user rounded-circle"
                            />
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                                Profile{" "}
                                <i className="ri-profile-line float-right text-muted"></i>
                            </a>
                            <a className="dropdown-item" href="#">
                                Setting
                                <i className="ri-settings-3-line float-right text-muted"></i>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                Log out
                                <i className="ri-logout-circle-r-line float-right text-muted"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}
