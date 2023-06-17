export default class UserInfo {
    constructor({ profileName, profileDescription,profileAvatar  }) {
        this._profileName = document.querySelector(profileName);
        this._profileInfo = document.querySelector(profileDescription);
        this._profileAvatar = document.querySelector(profileAvatar);
    }
    
    getUserInfo() {
        this._userInfo = {
            name: this._profileName.textContent,
            infos: this._profileInfo.textContent
        }
        return this._userInfo;
    }

    setUserInfo(userInfo) {
        
        this._profileName.textContent = userInfo.name;
        this._profileInfo.textContent = userInfo.about;
        this._profileAvatar.src = userInfo.avatar;
    }
}