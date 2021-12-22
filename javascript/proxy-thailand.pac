function FindProxyForURL(url,host)

{

    // Access the internet directly for one site

    if (dnsDomainIs(host, "www.example.com")) {

        return "DIRECT";

    }

    // No proxy for private (RFC 1918) IP addresses (intranet sites)

    if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||

        isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||

        isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {

         return "DIRECT";

    }

    // No proxy for localhost

    if (isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")) {

        return "DIRECT";

    }

    // Clean-up rule. Everything else uses a proxy. Note semi-colon delimiter between strings.

    return "SOCKS 223.204.52.19:5678; SOCKS 171.7.23.21:4153; SOCKS 183.88.90.3:5678; SOCKS 183.88.103.26:4145; SOCKS 183.88.85.164:5678; SOCKS 184.82.229.216:5678";

}