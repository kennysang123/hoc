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
	
	
	return "SOCKS 45.76.177.24:1099, SOCKS 139.99.91.150:1080, SOCKS 45.249.101.4:56457, SOCKS 45.76.150.142:31410, SOCKS 128.199.14.67:18253, SOCKS 159.65.14.150:9050, SOCKS 116.251.216.53:5678, SOCKS 129.126.99.254:4153, SOCKS 128.199.213.193:9050, SOCKS 172.104.56.209:9050, SOCKS 122.248.197.121:9050";

}