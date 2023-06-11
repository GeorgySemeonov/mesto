export default class UserInfo {
    constructor({ profileName, profileDescription  }) {
        this._profileName = document.querySelector(profileName);
        this._profileInfo = document.querySelector(profileDescription);
    }

    getUserInfo() {
        this._userInfo = {
            name: this._profileName.textContent,
            info: this._profileInfo.textContent
        }
        return this._userInfo;
    }

    setUserInfo(userInfo) {
        this._profileName.textContent = userInfo.name;
        this._profileInfo.textContent = userInfo.occupation;
    }
}