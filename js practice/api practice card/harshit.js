const reqestUrl = 'https://api.github.com/users/CodeWithHarry'
        const xhr = new XMLHttpRequest();
        xhr.open('GET' , reqestUrl)
        xhr.onreadystatechange = function () {
            console.log(xhr.readyState);
            if (xhr.readyState === 4) {

                const showData = JSON.parse(this.responseText)
                const cardProfile = document.getElementById('card-profile')
                cardProfile.innerHTML = `
                <img class ="profile" src="${showData.avatar_url}" alt ="Profile Picture">
                <h2 class = "name">Login : ${showData.login}</h2>
                <p class = "streamFollower">Followers : ${showData.followers}</p>
                <a href = "${showData.html_url}" class = "profile_view" target="_blank"> Profile Of Github </a>                `

            }
        }
        xhr.send()