export function useAuth() {
        function onLogin() {
            const client_id = "bb534c1334a64476be453f8488c7f536";
            const spotify_endpoint = "https://accounts.spotify.com/authorize"
            const redirect_url = "http://localhost:3000/metrics"
            const delimiter = "%20";
            const scopes = [
                "user-read-email",
                "user-top-read"
            ];
            const scopes_url_param = scopes.join(delimiter);

            
            window.location.href = `${spotify_endpoint}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scopes_url_param}&response_type=token&show_dialog=true`
     
        }

        return { onLogin }
}