pragma solidity ^0.4.17;

contract Inbox{
    // Storage variable which is stored
    // with the contract instance in the
    // blockchain
    string public message;

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public{
        message = newMessage;
    }
}
