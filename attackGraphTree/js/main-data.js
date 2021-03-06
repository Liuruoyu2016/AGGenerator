/**
 * Created by Nettle on 2016/11/23.
 */
/*
var attackGraphData = {
    "nodes": [
        {
            "id": 1,
            "info": "execCode(test,someUser)",
            "type": "OR",
            "initial": 0
        },
        {
            "id": 2,
            "info": "RULE 2 (remote exploit of a server program)",
            "type": "AND",
            "initial": 0
        },
        {
            "id": 3,
            "info": "netAccess(test,someProtocol,somePort)",
            "type": "OR",
            "initial": 0
        },
        {
            "id": 4,
            "info": "RULE 6 (direct network access)",
            "type": "AND",
            "initial": 0
        },
        {
            "id": 5,
            "info": "hacl(internet,test,someProtocol,somePort)",
            "type": "LEAF",
            "initial": 1
        },
        {
            "id": 6,
            "info": "attackerLocated(internet)",
            "type": "LEAF",
            "initial": 1
        },
        {
            "id": 7,
            "info": "networkServiceInfo(test,safari,someProtocol,somePort,someUser)",
            "type": "LEAF",
            "initial": 1
        },
        {
            "id": 8,
            "info": "vulExists(test,’CVE-2015-4000’,safari,remoteExploit,privEscalation)",
            "type": "LEAF",
            "initial": 1
        }

    ],
    "edges": [
        {
            "source": 5,
            "target": 4
        },
        {
            "source": 6,
            "target": 4
        },
        {
            "source": 4,
            "target": 3
        },
        {
            "source": 3,
            "target": 2
        },
        {
            "source": 7,
            "target": 2
        },
        {
            "source": 8,
            "target": 2
        },
        {
            "source": 2,
            "target": 1
        }
    ]
};
    */

var attackGraphData = {"nodes":[{"id":"1","info":"execCode(serc_192_168_200_99,someUser)","type":"OR","initial":"0"},{"id":"2","info":"RULE 2 (remote exploit of a server program)","type":"AND","initial":"0"},{"id":"3","info":"netAccess(serc_192_168_200_99,someProtocol,somePort)","type":"OR","initial":"0"},{"id":"4","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"5","info":"hacl(serc_192_168_200_10,serc_192_168_200_99,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"6","info":"execCode(serc_192_168_200_10,someUser)","type":"OR","initial":"0"},{"id":"7","info":"RULE 2 (remote exploit of a server program)","type":"AND","initial":"0"},{"id":"8","info":"netAccess(serc_192_168_200_10,someProtocol,somePort)","type":"OR","initial":"0"},{"id":"9","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"10","info":"hacl(serc_192_168_200_10,serc_192_168_200_10,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"11","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"12","info":"hacl(serc_192_168_200_11,serc_192_168_200_10,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"13","info":"execCode(serc_192_168_200_11,someUser)","type":"OR","initial":"0"},{"id":"14","info":"RULE 2 (remote exploit of a server program)","type":"AND","initial":"0"},{"id":"15","info":"netAccess(serc_192_168_200_11,someProtocol,somePort)","type":"OR","initial":"0"},{"id":"16","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"17","info":"hacl(serc_192_168_200_10,serc_192_168_200_11,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"18","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"19","info":"hacl(serc_192_168_200_11,serc_192_168_200_11,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"20","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"21","info":"hacl(serc_192_168_200_66,serc_192_168_200_11,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"22","info":"execCode(serc_192_168_200_66,someUser)","type":"OR","initial":"0"},{"id":"23","info":"RULE 2 (remote exploit of a server program)","type":"AND","initial":"0"},{"id":"24","info":"netAccess(serc_192_168_200_66,someProtocol,somePort)","type":"OR","initial":"0"},{"id":"25","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"26","info":"hacl(serc_192_168_200_10,serc_192_168_200_66,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"27","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"28","info":"hacl(serc_192_168_200_11,serc_192_168_200_66,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"29","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"30","info":"hacl(serc_192_168_200_66,serc_192_168_200_66,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"31","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"32","info":"hacl(serc_192_168_200_99,serc_192_168_200_66,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"33","info":"networkServiceInfo(serc_192_168_200_66,safari,someProtocol,somePort,someUser)","type":"LEAF","initial":"1"},{"id":"34","info":"vulExists(serc_192_168_200_66,'CVE-2015-4000',safari,remoteExploit,privEscalation)","type":"LEAF","initial":"1"},{"id":"35","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"36","info":"hacl(serc_192_168_200_99,serc_192_168_200_11,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"37","info":"networkServiceInfo(serc_192_168_200_11,safari,someProtocol,somePort,someUser)","type":"LEAF","initial":"1"},{"id":"38","info":"vulExists(serc_192_168_200_11,'CVE-2015-4000',safari,remoteExploit,privEscalation)","type":"LEAF","initial":"1"},{"id":"39","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"40","info":"hacl(serc_192_168_200_66,serc_192_168_200_10,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"41","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"42","info":"hacl(serc_192_168_200_99,serc_192_168_200_10,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"43","info":"RULE 6 (direct network access)","type":"AND","initial":"0"},{"id":"44","info":"hacl(internet,serc_192_168_200_10,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"45","info":"attackerLocated(internet)","type":"LEAF","initial":"1"},{"id":"46","info":"networkServiceInfo(serc_192_168_200_10,safari,someProtocol,somePort,someUser)","type":"LEAF","initial":"1"},{"id":"47","info":"vulExists(serc_192_168_200_10,'CVE-2015-4000',safari,remoteExploit,privEscalation)","type":"LEAF","initial":"1"},{"id":"48","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"49","info":"hacl(serc_192_168_200_11,serc_192_168_200_99,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"50","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"51","info":"hacl(serc_192_168_200_66,serc_192_168_200_99,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"52","info":"RULE 5 (multi-hop access)","type":"AND","initial":"0"},{"id":"53","info":"hacl(serc_192_168_200_99,serc_192_168_200_99,someProtocol,somePort)","type":"LEAF","initial":"1"},{"id":"54","info":"networkServiceInfo(serc_192_168_200_99,safari,someProtocol,somePort,someUser)","type":"LEAF","initial":"1"},{"id":"55","info":"vulExists(serc_192_168_200_99,'CVE-2015-4000',safari,remoteExploit,privEscalation)","type":"LEAF","initial":"1"}],"edges":[{"source":"5","target":"4"},{"source":"10","target":"9"},{"source":"6","target":"9"},{"source":"9","target":"8"},{"source":"12","target":"11"},{"source":"17","target":"16"},{"source":"6","target":"16"},{"source":"16","target":"15"},{"source":"19","target":"18"},{"source":"13","target":"18"},{"source":"18","target":"15"},{"source":"21","target":"20"},{"source":"26","target":"25"},{"source":"6","target":"25"},{"source":"25","target":"24"},{"source":"28","target":"27"},{"source":"13","target":"27"},{"source":"27","target":"24"},{"source":"30","target":"29"},{"source":"22","target":"29"},{"source":"29","target":"24"},{"source":"32","target":"31"},{"source":"1","target":"31"},{"source":"31","target":"24"},{"source":"24","target":"23"},{"source":"33","target":"23"},{"source":"34","target":"23"},{"source":"23","target":"22"},{"source":"22","target":"20"},{"source":"20","target":"15"},{"source":"36","target":"35"},{"source":"1","target":"35"},{"source":"35","target":"15"},{"source":"15","target":"14"},{"source":"37","target":"14"},{"source":"38","target":"14"},{"source":"14","target":"13"},{"source":"13","target":"11"},{"source":"11","target":"8"},{"source":"40","target":"39"},{"source":"22","target":"39"},{"source":"39","target":"8"},{"source":"42","target":"41"},{"source":"1","target":"41"},{"source":"41","target":"8"},{"source":"44","target":"43"},{"source":"45","target":"43"},{"source":"43","target":"8"},{"source":"8","target":"7"},{"source":"46","target":"7"},{"source":"47","target":"7"},{"source":"7","target":"6"},{"source":"6","target":"4"},{"source":"4","target":"3"},{"source":"49","target":"48"},{"source":"13","target":"48"},{"source":"48","target":"3"},{"source":"51","target":"50"},{"source":"22","target":"50"},{"source":"50","target":"3"},{"source":"53","target":"52"},{"source":"1","target":"52"},{"source":"52","target":"3"},{"source":"3","target":"2"},{"source":"54","target":"2"},{"source":"55","target":"2"},{"source":"2","target":"1"}]}
